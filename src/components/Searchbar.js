const Searchbar = () => {
    return (
        <div className="flex mt-5  flex-grow">
            <input
                type="text"
                placeholder="Search..."
                className="bg-white lg:w-80 md:w-70 sm:w-60 border-solid border-2 border-black-400 text-green lg:ml-10 md:ml-10 px-5 py-3 border-r-0 rounded-l-3xl focus:outline-none flex-n-800 rounded-l-3xl focus:outline-none flex-grow"
                style={{ maxWidth: '300px' }}
            />
            <button className="bg-green-500 border-solid border-2 mt-5mr-5px border-green-500 font-bold border-l-0 text-white px-5 py-3 rounded-r-3xl">Search</button>
        </div>
    );
}

export default Searchbar;