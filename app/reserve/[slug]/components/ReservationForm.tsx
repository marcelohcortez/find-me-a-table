"use client";

import { useEffect, useState } from "react";
import useReservation from "../../../../hooks/useReservation";

export default function ReservationForm() {
    const [disabled, setDisabled] = useState(true);
    const {error, loading, createReservation} = useReservation();
    const [inputs, setInputs] = useState({
        bookerFirstName: "",
        bookerLastName: "",
        bookerPhone: "",
        bookerEmail: "",
        bookerOcasion: "",
        bookerRequest: ""
    });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if (inputs.bookerFirstName && inputs.bookerLastName  && inputs.bookerPhone  && inputs.bookerEmail) {
            return setDisabled(false);
        }
    
        setDisabled(true);
      }, [inputs])

    return (
        <div className="mt-10 flex flex-wrap justify-between w-[660px]">
            <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="First name"
                value={inputs.bookerFirstName} 
                name="bookerFirstName"
                onChange={handleChangeInput} 
            />
            <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Last name"
                value={inputs.bookerLastName} 
                name="bookerLastName"
                onChange={handleChangeInput} 
            />
            <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Phone number"
                value={inputs.bookerPhone}
                name="bookerPhone"
                onChange={handleChangeInput} 
            />
            <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Email"
                value={inputs.bookerEmail}
                name="bookerEmail"
                onChange={handleChangeInput} 
            />
            <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Ocasion (optional)"
                value={inputs.bookerOcasion}
                name="bookerOcasion"
                onChange={handleChangeInput} 
            />
            <input
                type="text"
                className="border rounded p-3 w-80 mb-4"
                placeholder="Requests (optional)"
                value={inputs.bookerRequest}
                name="bookerRequest"
                onChange={handleChangeInput} 
            />
            <button
                className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300"
                disabled={disabled}
            >
                Complete reservation
            </button>
            <p className="mt-4 text-sm">
                By clicking “Complete reservation” you agree to the OpenTable Terms
                of Use and Privacy Policy. Standard text message rates may apply.
                You may opt out of receiving text messages at any time.
            </p>
        </div>
    )
}
