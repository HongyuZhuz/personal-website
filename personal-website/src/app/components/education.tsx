export const MyEducationSection:React.FC = ()=>{
    return(
        <section>
            <div className="bg-black bg-opacity-70 text-white p-10">
                <p className="text-red-600 text-xl font-bold md:ml-10">BACKGROUND</p>
                <div className="flex flex-col md:flex-row md:ml-10">
                    <EducationList />
                    <Skills />
                    
                </div>
            </div>
        </section>
        
    )
}

const EducationList = () =>{
    return (
        <div className="md:w-1/2">
            <h2 className="text-4xl mb-4">My Education</h2>
            <div className="mb-6 flex flex-row">
                <div className="md:flex hidden">
                    <Bar />
                </div>
                
                <Education />
            </div> 
        </div>
    )
}

const Bar = ()=>{
    return(
        <div className="flex flex-col p-4 mt-5 max-h-[450px]">
            <div className="bg-red-600 h-screen w-px relative">
                <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute top-56 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
</div>
    )
}

const Education = () =>{
    return(
        <div className="p-4 md:mr-10 max-w-md">
            <div className="my-4 mb-10">
                <h3 className="text-md text-white">As a developer</h3>
                <p className="text-red-500 font-bold">2018-2020</p>
                <h2 className="text-2xl font-bold">Master of Computing</h2>
                <p className="text-sm">A two-year Masters Degree provided by Australian National University, which enabled me to develop a deep and in-depth knowledge and understanding of professional software development and computing practices.</p>
                <a href="#more" className="text-red-600 underline">More</a>
            </div>
            <div className="my-4">
                <h3 className="text-md text-white">As a designer</h3>
                <p className="text-red-500 font-bold">2014-2018</p>
                <h2 className="text-2xl font-bold">Bachelor of Landscape Architecture</h2>
                <p className="text-sm">Beijing Forestry University offers the best Landscape Architecture program in China. This four-year curriculum enabled me to develop deep understanding in the area Architecture, Landscape Architecture and Digital Design.</p>
                <a href="#more" className="text-red-600 underline">More</a>
            </div>
        </div>
    )
}

const Skills = () =>{
    return (
        <div className="md:w-1/2">
            <h2 className="text-4xl mb-4">My Skills</h2>
                <div className="mb-6">
                    {/* 技能列表 */}
                </div>
                {/* 更多技能列表 */}
        </div>
    )
}
