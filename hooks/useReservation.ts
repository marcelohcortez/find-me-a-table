import { useState  } from "react";
import axios from "axios";

export default function useReservation(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createReservation = async ({
        slug, 
        partySize, 
        day, 
        time,
        bookerFirstName,
        bookerLastName,
        bookerPhone,
        bookerEmail,
        bookerOcasion,
        bookerRequest
    }: {
        slug: string;
        partySize: string;
        day: string;
        time: string;
        bookerFirstName: string;
        bookerLastName: string;
        bookerPhone: string;
        bookerEmail: string;
        bookerOcasion: string;
        bookerRequest: string
    }) => {
        setLoading(true)

        try {
            const response = await axios.posy(`http://localhost:3000/api/restaurant/${slug}/reserve`, {
                bookerFirstName,
                bookerLastName,
                bookerPhone,
                bookerEmail,
                bookerOcasion,
                bookerRequest
            }, {
                params: {
                    day,
                    time,
                    partySize
                }
            })
            setLoading(false);
            return response.data
        } catch (error: any) {
            setLoading(false);
            setError(error.response.data.message)
        }
    }

    return {loading, error, createReservation}
}