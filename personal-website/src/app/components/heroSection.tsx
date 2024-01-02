

export const HeroSection:React.FC = ()=>{
    return(
        <section>
            <div className="w-full bg-black bg-opacity-50 bg-cover bg-no-repeat text-white p-12 mt-20 mb-20">
                <div className="md:w-1/2 md:mx-auto ">
                    <p className="text-3xl ml-1">I&apos;m Hongyu Zhu</p>
                    <div className="text-6xl mb-3 md:text-8xl mt-0">
                        <p className="text-red-500 font-bold">Developer</p>
                        <p className="text-white">AND</p>
                        <p className="text-red-500 font-bold">Designer</p>
                    </div>
                    <p className="text-md max-w-md ml-2">If you are looking for someone with professional developing skills and impressive design ability, I would be your perfect choice.</p> 
                    <button className="ml-2 mt-8 bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-lg">
                        Learn more
                    </button>
                </div>

            </div>
        </section> 
    )
}