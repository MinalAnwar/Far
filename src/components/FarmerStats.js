const FarmerStats = (props) => {
    return (
        <div class="transform bg-neutral-100 rounded-xl h-20 w-32 sm:h-32 sm:w-48 shadow-2xl my-5 mx-5 transition duration-300 hover:scale-105">
            <div class="flex h-full justify-center items-center">
                <p class="font-bold text-xl text-green-500">{props.title}</p>
                <p class="font-bold text-xl text-green-500 ml-2">{props.quantity}</p>
            </div>
        </div>
    );
}

export default FarmerStats;