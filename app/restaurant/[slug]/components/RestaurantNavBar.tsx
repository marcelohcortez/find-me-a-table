import Link from "next/link";

export default function RestaurantNavBar({ slug }: { slug: string }){
    return(
        <nav className="flex text-reg border-b border-orange-400 pb-2">
            <Link href={`/restaurant/${slug}`} className="mr-7 bg-orange-400 text-white border p-1 px-4 rounded mr-3"> 
                Overview
            </Link>
            <Link href={`/restaurant/${slug}/menu`} className="mr-7 bg-orange-400 text-white border p-1 px-4 rounded mr-3">
                Menu
            </Link>
        </nav>
    )
}