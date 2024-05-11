import Navbar from "./navbar";
import ButtonFilled from "./buttonFilled";
import Footer from "../footer";

const NegotiateRequest = (props) => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center mb-20 mt-20">
                <div className="flex flex-wrap w-full h-full sm:w-11/12 max-w-4xl">
                    <div className="w-full sm:w-8/12 mb-10">
                        <div className="container mx-auto h-full sm:p-10 shadow-2xl rounded-lg">
                            <div className="flex justify-center px-4 pb-5 mb-5">
                                <h1 className="font-bold text-3xl text-green-500 text-center ">{props.pgTitle}</h1>
                            </div>
                            <form>
                                <div className="container px-4 mt-6">
                                    <div className="mb-4">
                                        <label htmlFor="quantity" className="block text-xl font-bold text-green-500">Price</label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            min="1000"
                                            className="block w-full px-4 py-3 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border focus:ring focus:ring-gray-100"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="quantity" className="block text-xl font-bold text-green-500">Quantity</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            name="quantity"
                                            min="20"
                                            max="500"
                                            className="block w-full px-4 py-3 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border focus:ring focus:ring-gray-100"
                                            required
                                        />
                                    </div>

                                    <div className="flex mt-4 mr-5">
                                        <ButtonFilled isFlex="flex-1" title={props.btnTitle} Margin="5" bgColor="green-500" borderColor="green-500" textColor="white" />
                                        <ButtonFilled isFlex="flex-1" title="Cancel" bgColor="green-500" borderColor="green-500" textColor="white" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full sm:w-4/12 mb-10 flex flex-1 justify-start ">
                        <img
                            className="h-full object-cover shadow-l-2xl rounded-r-xl shadow-2xl"
                            src='/Assets/images/img.jpg'
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NegotiateRequest;