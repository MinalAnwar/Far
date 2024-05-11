import Navbar from "./navbar";
import ButtonFilled from "./buttonFilled";
import FarmerStats from "./FarmerStats";
import ListingCard from "./card";
import Footer from "../footer";
const FarmerHome = (props) => {
    return (
        <div>
            <Navbar isHidden="true" />
            <div className="flex items-center justify-center">
                <div className="w-screen h-screen bg-gray-100 flex flex-col md:flex-row bg-white overflow-hidden">
                    <div className="w-full h-full flex items-center md:items-center md:w-1/2 px-6 py-8">
                        <div className="flex flex-col">
                            <div className="flex flex-col md:flex-row items-center">
                                <h1 className="lg:text-8xl text-5xl font-bold text-green-500 md:text-left">Welcome</h1>
                                <p className="lg:text-7xl mt-3 ml-4 text-5xl font-bold text-black md:text-left">Minal</p>
                            </div>

                            <p className="text-xl md:text-2xl text-center lg:text-3xl text-gray-500 mt-2">Manage your Listings, Products, messages directly from your home.</p>
                            <div className="flex mt-4 justify-center">
                                <ButtonFilled title="Create Listing" Margin="5" bgColor="green-500" borderColor="green-500" textColor="white"></ButtonFilled>
                                <ButtonFilled title="Add Product" bgColor="green-500" borderColor="green-500" textColor="white"></ButtonFilled>
                            </div>


                        </div>
                    </div>
                    {/* do not add more than 5 of total products it will not look good in even */}
                    <div className="style justify-center flex-wrap overflow-hidden">
                        <div className="flex justify-center flex-wrap sm:flex-cols">
                            <FarmerStats title="wheat" quantity="50Kg"></FarmerStats>
                            <FarmerStats title="wheat" quantity="50Kg"></FarmerStats>
                            <FarmerStats title="wheat" quantity="50Kg"></FarmerStats>
                            <FarmerStats title="wheat" quantity="50Kg"></FarmerStats>
                            <FarmerStats title="wheat" quantity="50Kg"></FarmerStats>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex flex-wrap">
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>
                <ListingCard image="/Assets/images/img.jpg" title="Listing Title" description="add some description here." amount="50 Kg" price="250" ></ListingCard>

            </div>
            <Footer/>
        </div>

    );
}

export default FarmerHome;