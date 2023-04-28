import { capitalizeArray } from "../../utils/capitalizeArray"
import Header from "./components/Header"
import ReservationForm from "./components/ReservationForm"

export async function generateMetadata({ params}: {params: {slug: string}}){
  return {
    title: `Menu of ${capitalizeArray({params})} - Find Me a Table`,
  }
}

export default function Reserve() {
  return (
    <>
      <div className="border-t h-screen">
          <div className="py-9 w-3/5 m-auto">
              <Header/>
              <ReservationForm/>
          </div>
      </div>
    </>
  )
}
