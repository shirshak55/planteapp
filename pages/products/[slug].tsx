import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { SearchBar } from "../../components/SearchBar"

export default function ShowProduct({}) {
    let [openFoodFact, setOpenFoodFact]: any = useState({})
    let [planteApi, setPlanteApi]: any = useState({})
    const router = useRouter()

    const { slug } = router.query

    useEffect(() => {
        if (slug) {
            fetch(`https://world.openfoodfacts.org/api/v2/product/${slug}`)
                .then((resp) => resp.json())
                .then((json) => setOpenFoodFact(json.product))
        }
    }, [slug])

    return (
        <>
            <div className="xl:w-1/3 md:w-1/2 p-4 m-auto">
                <SearchBar />
                {openFoodFact && (
                    <div className=" c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden ">
                        <img
                            className=" lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4 "
                            src={openFoodFact?.image_front_url}
                            alt="Image Size 720x400"
                        />
                        <div className="p-4">
                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                {openFoodFact?.brands}
                            </h3>
                            <h2 className=" text-lg text-gray-900 font-medium title-font mb-4 whitespace-nowrap truncate ... ">
                                {openFoodFact?.product_name}
                            </h2>

                            <div className="py-4 border-t border-b text-xs text-gray-700">
                                <div className="">
                                    {openFoodFact?.ingredients?.map((ing: any) => (
                                        <div className="flex justify-between p-2" key={ing.id}>
                                            <span>{ing.text}</span>
                                            <span
                                                className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white ${
                                                    ing.vegan == "yes" ? "bg-green-400" : "bg-red-400"
                                                } rounded-full `}
                                            >
                                                {ing.percent_estimate}%
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {!openFoodFact && (
                    <div className=" c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-10">
                        {" "}
                        <p> Sorry! Product not found</p>
                    </div>
                )}
            </div>
        </>
    )
}
