import { capitalizeArray } from "../../utils/capitalizeArray";
import Header from "./components/Header";

export async function generateMetadata({ params}: {params: {slug: string}}){
  return {
    title: `Restaurant ${capitalizeArray({params})} - Find Me a Table`,
  }
}

export default function Restaurantlayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string }
}) {
  return (
    <>
        <Header name={params.slug}/>
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
            {children}
        </div>
    </>
  )
}
