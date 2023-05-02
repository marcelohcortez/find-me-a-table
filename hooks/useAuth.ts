import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
    const {data, error, loading, setAuthState} = useContext(AuthenticationContext);

    const signin = async ({
        email, 
        password
    }: {
        email: string, 
        password: string
    }, handleClose: () => void) => {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signin", {
                email,
                password
            });
            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            })
        }
    }
     
    const signup = async ({
        firstName,
        lastName,
        email,
        password,
        phone,
        city,
    }: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phone: string;
        city: String;
    }, handleClose: () => void) => {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const response = await axios.post("http://localhost:3000/api/auth/signup", {
                firstName,
                lastName,
                email,
                password,
                phone,
                city,
            });
            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            })
        }
    }

    

    return {
        signin,
        signup,
    }
}

export default useAuth;