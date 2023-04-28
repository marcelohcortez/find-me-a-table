import Link from "next/link";
import { RestaurantCardType } from "../../page";
import Price from "../../components/price";
import { calculateReviewRatingAverage } from "../../utils/calculateReviewRatingAverage";
import Stars from "../../components/Stars";

interface Props{
    restaurant: RestaurantCardType;
}
 
export default function RestaurantCard({ restaurant }: Props){
    const renderRatingText = () => {
        const rating = calculateReviewRatingAverage(restaurant.reviews);

        if (rating > 4) return "Awesome"
        else if (rating <= 4 && rating > 3) return "Good"
        else if (rating <= 3 && rating > 2) return "Average"
        else return ""
    }

    return(
        <>
            <div className="border-b border-orange-400 flex pb-5 pt-5 ml-4">
                <img
                    src={restaurant.main_image}
                    alt={restaurant.name}
                    className="w-44 h-36 rounded"
                />
                <div className="pl-5">
                    <h2 className="text-3xl">{restaurant.name}</h2>
                    <div className="flex items-start">
                        <Stars reviews={restaurant.reviews}/>
                        <p className="ml-2 text-sm">{renderRatingText()}</p>
                    </div>
                    <div className="mb-9">
                        <div className="font-light flex text-reg">
                            <p className="mr-4"><Price price={restaurant.price}/></p>
                            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                            <p className="mr-4 capitalize">{restaurant.location.name}</p>
                        </div>
                    </div>
                    <div className="text-orange-400 font-bold hover:underline">
                        <Link href={`/restaurant/${restaurant.slug}`}>
                            View more information
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}