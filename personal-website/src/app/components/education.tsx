export const MyEducationSection:React.FC = ()=>{
    return(
        <section>
            <div className="bg-black bg-opacity-50 text-white p-10">
                <p className="text-red-500 text-xl font-bold md:ml-10">BACKGROUND</p>
                <div className="flex flex-col md:flex-row">
                    <Education />
                    <Skills />
                    
                </div>
            </div>
        </section>
        
    )
}

const Education = () =>{
    return (
        <div className="md:w-1/2">
                    <h2 className="text-4xl mb-4 md:ml-10">My Education</h2>
                    <div className="mb-6">
                        {/* 各个教育经历的描述 */}
                    </div>
                        {/* 更多教育经历 */}
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
