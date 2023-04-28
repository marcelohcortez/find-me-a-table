import Header from "./components/Header"
import SearchSideBar from "./components/SearchSideBar"
import RestaurantCard from "./components/RestaurantCard"
import { PRICE, PrismaClient } from "@prisma/client";

export const metadata = {
    title: 'Search - Find Me a Table',
}

interface SearchParams { 
    city?: string, 
    cuisine?: string, 
    price?: PRICE 
}

const prisma = new PrismaClient();

const fetchRestaurants = (searchParams: SearchParams) => {
    const where: any = {};

    if (searchParams.city) {
        const location = {
            name: {
                equals: searchParams.city.toLowerCase(),
            }
        }
        where.location = location;
    }

    if (searchParams.cuisine) {
        const cuisine = {
            name: {
                equals: searchParams.cuisine.toLowerCase(),
            }
        }
        where.cuisine = cuisine;
    }

    if (searchParams.price) {
        const price = {
            equals: searchParams.price,
        }
        where.price = price;
    }

    const select = {
        id: true,
        name: true,
        main_image: true,
        slug: true,
        price: true,
        reviews: true,
        cuisine: true,
        location: true,
    }

    return prisma.restaurant.findMany({
        where,
        select,
    });

};

const fetchLocations = async () => {
    return prisma.location.findMany();
}

const fetchCuisines = async () => {
    return prisma.cuisine.findMany();
}

export default async function Search({
    searchParams,
}: {
    searchParams: SearchParams;
}) {

    const restaurants = await fetchRestaurants(searchParams);
    const locations = await fetchLocations();
    const cuisines = await fetchCuisines();

    return (
        <>
            <Header/>
            <div className="flex py-4 m-auto w-2/3 justify-between items-start">
                <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams}/>
                <div className="w-5/6">
                    {restaurants.length ? (
                        <>
                            {restaurants.map((restaurant) => (
                                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                            ))}
                        </>
                    ) : (
                        <p>Sorry, we found no restaurants in that area</p>
                    )}
                </div>
            </div>
        </>
    )
}