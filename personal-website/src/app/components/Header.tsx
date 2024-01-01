interface HeaderProps {
    title:string;
    subtitle:string;
}

export const Header:React.FC = ()=>{
    return(
        <div className="w-full bg-black bg-opacity-50 bg-cover bg-no-repeat text-white p-12 mt-20 md:mt-40">
            <div className="max-w-6xl mx-auto text-left">
                <h1 className="text-3xl font-bold">I'm Hongyu Zhu</h1>
                <div className="text-8xl mt-4 mb-8">
                    <p className="text-red-500">Developer</p>
                    <p className="text-white">AND</p>
                    <p className="text-red-500">Designer</p>
                </div>
                <p className="text-xl">If you are looking for someone with professional computer science skills and impressive design ability, I would be your perfect choice.</p>
                <button className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Learn more
                </button>
            </div>
    </div>
    )
}