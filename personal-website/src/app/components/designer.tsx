export const Designer=()=>{
    return(
        <div>
            <div className="flex justify-start flex-col bg-black">
                <div className="flex">
                <div className="w-1/4"></div>
                <div className="md:w-1/4 flex flex-col mt-20">
                    <h1 className="text-red-500 text-xl font-bold">MY PORTFOLIO</h1>
                    <h2 className="text-white text-4xl">As a <span className="font-bold">Designer</span></h2>
                    <p className="text-white text-md max-w-md">At this part, I will introduce what I have done as a designer. My portfolio will tell you the story.</p>
                </div>
                </div>
                
            </div>
            <div className="flex items-center justify-center">
                <button className="mr-4 text-white">{"<"}</button> {/* 翻页按钮，向左 */}
                <div className="w-full"> {/* 图片浏览器 */}

                </div>
                <button className="ml-4">{">"}</button> {/* 翻页按钮，向右 */}
            </div>
        </div>)
    
}