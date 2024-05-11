import Footer from "../footer";
import Navbar from "./navbar";
import ButtonFilled from "./buttonFilled";

const Listing = (props) => {
    return (
        <div>
            <Navbar />
            <div className="justify-center items-center p-10  shadow-2xl m-5 sm:m-10 rounded-2xl">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-8/12 mb-10">
                        <div className="container mx-auto h-full sm:p-5">
                            <header className="container px-4 lg:flex mt-5 items-center h-full lg:mt-0">
                                <div className="w-full">
                                    <div className="flex justify-center px-4 pb-3 mb-3">
                                        <h1 className="font-bold lg:text-3xl sm:text-3xl  md:text-2xl text-green-500 text-center ">{props.pgTitle}</h1>
                                    </div>
                                    <form>
                                        <div className="container px-4 mt-4 sm:mt-6">
                                            <div className="flex flex-col md:flex-row mb-3 sm:mb-4">
                                                <div className="mb-3 flex-1 md:mr-5">
                                                    <label htmlFor="title" className="block text-xl font-bold text-green-500">Title</label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        name="title"
                                                        placeholder="Enter a listing title"
                                                        required
                                                        className="flex-1 w-full px-3 py-2 mt-1 sm:mt-2 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border focus:ring focus:ring-gray-100"
                                                    />
                                                </div>
                                                <div className="mb-3 flex-1 md:ml-5">
                                                    <label htmlFor="price" className="block text-xl font-bold text-green-500">Price</label>
                                                    <input
                                                        type="text"
                                                        id="price"
                                                        name="price"
                                                        placeholder="Enter Price Per Unit"
                                                        required
                                                        className="flex-1 w-full px-3 py-2 mt-1 sm:mt-2 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border focus:ring focus:ring-gray-100"
                                                    />
                                                </div>
                                            </div>

                                            <div className="mb-3 sm:mb-4">
                                                <label htmlFor="productName" className="block text-xl font-bold text-green-500">Product Name</label>
                                                <select
                                                    id="productName"
                                                    name="productName"
                                                    className="block w-full px-3 py-2 mt-1 sm:mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border shadow-lg"
                                                    required
                                                >
                                                    <option value="" disabled>Select a product...</option>
                                                    <option value="apple">Apple</option>
                                                    <option value="banana">Banana</option>
                                                    <option value="orange">Orange</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>

                                            <div className="mb-3 sm:mb-4">
                                                <label htmlFor="quantity" className="block text-xl font-bold text-green-500">Quantity</label>
                                                <input
                                                    type="number"
                                                    id="quantity"
                                                    name="quantity"
                                                    min="20"
                                                    max="500"
                                                    className="block w-full px-3 py-2 mt-1 sm:mt-2 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border focus:ring focus:ring-gray-100"
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3 sm:mb-4">
                                                <label htmlFor="description" className="block text-xl font-bold text-green-500">Description</label>
                                                <textarea
                                                    rows="3"
                                                    id="description"
                                                    name="description"
                                                    className="block w-full px-3 py-2 mt-1 sm:mt-2 bg-white border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:border focus:ring focus:ring-gray-100"
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="mb-3 sm:mb-4">
                                                <label htmlFor="image" className="block text-xl font-bold text-green-500">Choose image</label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    accept="image/*"
                                                    className="block w-full px-3 py-2 mt-1 sm:mt-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border shadow-lg"
                                                    required
                                                />
                                            </div>

                                            <div className="flex mt-3 ml-5 justify-between sm:mt-10">
                                                <ButtonFilled isFlex="flex-1" title={props.btnTitle} Margin="6" bgColor="green-500" borderColor="green-500" textColor="white" />
                                                <ButtonFilled isFlex="flex-1" title="Cancel" bgColor="green-500" borderColor="green-500" textColor="white" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </header>
                        </div>
                    </div>
                    <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="Leafs" className="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Listing;
