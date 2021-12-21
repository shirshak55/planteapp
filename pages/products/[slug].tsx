import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { SearchBar } from "../../components/SearchBar"

export default function ShowProduct({}) {
    let [openFoodFact, setOpenFoodFact]: any = useState({})
    let [planteApi, setPlanteApi]: any = useState({})
    let [isPlanteApiLoading, setIsPlanteApiLoading]: any = useState(true)
    let [isOpenFoodFactLoading, setIsOpenFoodFactLoading]: any = useState(true)
    const router = useRouter()

    const { slug } = router.query

    useEffect(() => {
        if (slug) {
            fetch(`https://world.openfoodfacts.org/api/v2/product/${slug}`)
                .then((resp) => resp.json())
                .then((json) => {
                    if (json.product) {
                        setOpenFoodFact({
                            image_front_url: json.product.image_front_url,
                            brands: json.product.brands,
                            product_name: json.product.product_name,
                            ingredients: json.product.ingredients,
                        })
                    }
                })
                .catch((e) => console.log("Error on fetch", e))
                .finally(() => setIsOpenFoodFactLoading(false))
        }
    }, [slug])

    useEffect(() => {
        if (slug) {
            fetch(`https://planteapp.com/backend/product_data/?barcode=${slug}`)
                .then((resp) => resp.json())
                .then((json) => setPlanteApi(json))
                .catch((e) => console.log("Error on fetch", e))
                .finally(() => setIsPlanteApiLoading(false))
        }
    }, [slug])

    return (
        <>
            <div className="xl:w-1/3 md:w-1/2 p-4 m-auto">
                <SearchBar />
                {isOpenFoodFactLoading && <p>Loading data from server...</p>}
                {!isOpenFoodFactLoading && (
                    <>
                        {openFoodFact.product && (
                            <div className=" c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden ">
                                <img
                                    className=" lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-4 "
                                    src={openFoodFact?.image_front_url}
                                    alt="Image Size 720x400"
                                />
                                <div className="p-4">
                                    <div className="flex justify-between">
                                        <h2 className=" text-lg text-gray-900 font-semibold items-center title-font  whitespace-nowrap">
                                            {openFoodFact?.product_name}
                                        </h2>
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                            Brand: {openFoodFact?.brands}
                                        </h3>
                                    </div>
                                    {isPlanteApiLoading && <p>Loading data from plante</p>}
                                    {!isPlanteApiLoading && (
                                        <div
                                            className={` ${
                                                planteApi.vegan_status === "possible" ||
                                                planteApi.vegan_status === "positive"
                                                    ? "bg-green-50"
                                                    : "bg-red-50"
                                            } flex justify-between items-center p-3 rounded-sm shadow-sm `}
                                        >
                                            <div className="flex justify-start items-center gap-2 w-8/12">
                                                <svg
                                                    version="1.1"
                                                    id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 463 463"
                                                    style={{ maxWidth: 30 }}
                                                >
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M459.996,8.495c-0.667-2.707-2.781-4.821-5.488-5.488c-12.167-2.997-24.935-3.758-37.956-2.255
c-30.703,3.54-60.875,18.755-84.961,42.84c-24.085,24.085-39.299,54.258-42.84,84.961c-1.331,11.544-0.877,22.889,1.332,33.794
c-0.105,0.11-0.22,0.206-0.319,0.324c-33.014,39.222-55.366,81.822-70.263,123.99c-12.788-49.63-31.862-95.286-56.904-135.998
C125.318,90.058,74.456,39.741,11.421,1.106C8.125-0.914,3.835-0.098,1.51,2.989c-2.325,3.087-1.924,7.435,0.927,10.044
C79,83.108,132.937,164.55,162.752,255.096c12.556,38.133,29.249,100.395,29.249,200.404c0,4.143,3.358,7.5,7.5,7.5h32
c4.142,0,7.5-3.357,7.5-7.5c0-5.437-0.029-11.003-0.059-16.688c-0.392-74.703-0.886-169.281,63.947-265.461
c6.104,1.096,12.338,1.648,18.663,1.648c4.262-0.001,8.567-0.25,12.897-0.75c30.703-3.54,60.875-18.755,84.96-42.84
c24.085-24.085,39.3-54.259,42.841-84.961C463.753,33.431,462.994,20.661,459.996,8.495z M177,250.405
C155.416,184.853,121.562,123.98,75.987,68.61c28.689,26.611,53.381,56.662,73.833,89.912
c28.266,45.954,48.724,98.473,60.829,156.102c-3.958,14.085-7.146,28.023-9.693,41.672
C196.629,323.677,189.312,287.798,177,250.405z M223.942,438.891c0.017,3.072,0.032,6.109,0.043,9.109h-16.934
c0.661-49.269,8.03-110.876,32.567-172.211C223.401,335.698,223.698,392.412,223.942,438.891z M447.35,44.73
c-6.535,56.666-57.953,108.084-114.619,114.619c-6.813,0.787-13.53,0.844-20.09,0.205c24.296-32.846,56.551-65.776,99.375-98.066
c3.308-2.493,3.967-7.196,1.473-10.504c-2.493-3.306-7.196-3.966-10.503-1.473c-40.411,30.47-73.538,62.817-99.801,97.534
c-0.332-5.502-0.187-11.105,0.468-16.775c6.535-56.666,57.953-108.084,114.619-114.619c9.631-1.11,19.077-0.795,28.144,0.936
C448.145,25.654,448.461,35.099,447.35,44.73z"
                                                            />
                                                        </g>
                                                    </g>
                                                </svg>

                                                <div>
                                                    <p className="text-gray-700 font-bold tracking-wider">
                                                        Vegan Status:
                                                    </p>
                                                    <p className="text-gray-400 text-xs flex">
                                                        <span>Source:</span>{" "}
                                                        <span>{planteApi?.vegan_status_source?.toUpperCase()}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <span
                                                className={`font-bold ${
                                                    planteApi.vegan_status === "possible" ||
                                                    planteApi.vegan_status === "positive"
                                                        ? "text-green-400"
                                                        : "text-red-300"
                                                } w-4/12 flex justify-end`}
                                            >
                                                {planteApi?.vegan_status?.toUpperCase()}
                                            </span>
                                        </div>
                                    )}

                                    <div className="py-4 border-t border-b text-xs text-gray-700">
                                        <h2 className=" text-lg text-gray-900 font-medium title-font mb-4 whitespace-nowrap truncate ... ">
                                            Ingredients:
                                        </h2>
                                        <div className="">
                                            {openFoodFact?.ingredients?.map((ing: any) => (
                                                <div className="flex justify-between p-2" key={ing.id}>
                                                    <span>{ing.text}</span>
                                                    <span
                                                        className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white   ${
                                                            !ing.vegan ? "bg-gray-400" : ""
                                                        }  ${ing.vegan == "yes" ? "bg-green-400" : ""}
                                                ${ing.vegan == "maybe" ? "bg-pink-400" : ""}
                                                 ${ing.vegan == "no" ? "bg-red-400" : ""}    rounded-full  `}
                                                    >
                                                        {ing.percent_estimate?.toFixed(2)}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!openFoodFact.product && (
                            <div className=" c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden p-10">
                                <p> Sorry! Product not found</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
