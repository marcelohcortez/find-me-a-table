import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import validator from "validator";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
  
    if (req.method === "POST") {
        const { firstName, lastName, email, phone, city, password } = req.body;
        const errors: string[] = [];

        const validationSchema = [
            {
                valid: validator.isLength(firstName, {
                    min: 1,
                    max: 20,
                }),
                errorMessage: "First name is not valid"
            },
            {
                valid: validator.isLength(lastName, {
                    min: 1,
                    max: 20,
                }),
                errorMessage: "Last name is not valid"
            },
            {
                valid: validator.isEmail(email),
                errorMessage: "Email or password is not valid"
            },
            {
                valid: validator.isMobilePhone(phone),
                errorMessage: "Phone is not valid"
            },
            {
                valid: validator.isLength(city, {
                    min: 1
                }),
                errorMessage: "City is not valid"
            },
            {
                valid: validator.isStrongPassword(password),
                errorMessage: "Password is not strong enough "
            }
        ];

        validationSchema.forEach(check => {
            if (!check.valid) {
                errors.push(check.errorMessage);
            }
        });

        if (errors.length){
            return res.status(400).json({errorMessage: errors[0]})
        }

        const userWithEmail = await prisma.user.findUnique({
            where: {
                email, //could't find a way to fix this
            }
        });

        if (userWithEmail) {
            return res.status(400).json({ errorMessage: "Email is associated with another account" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const addUser = await prisma.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                city,
                password: hashedPassword,
            }
        })

        const alg = "HS256";

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const token = await new jose.SignJWT({
            email: addUser.email
        })
        .setProtectedHeader({ alg })
        .setExpirationTime("24h")
        .sign(secret)

        setCookie("jwt", token, {res, req, maxAge: 60 * 6 * 24});

        return res.status(200).json({
            firstName: addUser.first_name,
            lastName: addUser.last_name,
            email: addUser.email,
            phone: addUser.phone,
            city: addUser.city,
        });
    }
    
    return res.status(404).json("Unknown endpoint");

}
