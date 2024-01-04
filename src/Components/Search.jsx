import React from "react"
import {RiCustomerService2Full, RiCustomerService2Fill} from "react-icons/ri";
import {MdOutlineTravelExplore} from "react-icons/md";

const Search = () => {
    return ( 
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <div>
                    <h1> Luxry Included Vacation for two people</h1>
                    <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Laboriosam eveniet at, culpa et voluptates ducimus asperiores
                        sed est excepturi reprehenderit, aspernatur repellat magni perferendis.
                        Praesentium est in illo tempore ex doloremque accusantium ab enim ipsam
                        temporibus unde quaerat, aperiam magni. Pariatur, eveniet provident 
                        qui aspernatur sunt possimus id explicabo earum tempore expedita,
                        cum et nostrum quae quas error velit, laborum amet minima
                        ratione ullam animi libero quisquam. Architecto at
                        consectetur voluptas eaque sed fugit, numquam, iusto consequatur laborum
                        soluta nisi corporis aspernatur placeat asperiores ea quis ratione 
                        earum quidem sapiente neque nulla amet nesciunt ut. Nesciunt 
                        fugiat exercitationem tempora minus.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 py-4">
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button>
                            <RiCustomerService2Fill size={50}/>
                        </button>
                        <div>
                            <h3 className="py-2">LEADING SERVICE</h3>
                            <p  className="py-1">ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button>
                            <MdOutlineTravelExplore size={50}/>
                        </button>
                        <div>
                            <h3 className="py-2">LEADING SERVICE</h3>
                            <p className="py-1">ALL INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div> 

                <div>
                    <div className="border text-center">
                        <p className="pt-2"> GET AN ADDITIONAL 10% OFF</p>
                        <p className="py-4">12 HOURS LEFT</p>
                        <p className="bg-gray-800 text-gray-200 py-2"> BOOK NOW AND SAFE</p>
                    </div>
                </div>

                <form className="w-full">
                    <div className="flex flex-col py-2">
                        <label>Destination</label>
                        <select className="border rounded-md p-2 bg-gray-200 focus:bg-gray-500 focus:text-gray-200">
                            <option> Grand Antigua</option>
                            <option> Key west</option>
                            <option>Maldives</option>
                            <option>Couzumel</option>
                            <option>Tokyo</option>
                        </select>
                    </div>

                    <div className="flex flex-col py-2 my-4">
                        <label>Check-in</label>
                        <input className="border rounded-md p-2" type="date" />
                    </div>

                    <div className="flex flex-col py-2">
                        <label>Check-in</label>
                        <input className="border rounded-md p-2" type="date" />
                    </div>

                    <button className="w-full my-4">Rates & Availability</button>
                </form>
            </div>
        </div>
     );
}
 
export default Search;