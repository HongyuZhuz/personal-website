

export const AboutMe = () => {
    return (
      <section className="about-me-section w-full bg-black">
        <div className="flex flex-col md:flex-row p-20">
            <div className="md:w-1/2 flex justify-center items-right">
                <img src=" /my-profile-pic.jpg" alt="Profile" className="w-120 h-120" />
            </div>
            <div className="md:w-1/2 bg-black text-white p-10 max-w-md">
                <div className="mb-4">
                    <h2 className="text-2xl mb-2 text-red-500">ABOUT ME</h2>
                    <h1 className="text-5xl font-bold mb-4">Why you should hire me?</h1>
                    <p className="text-lg mb-4 text-red-500">Outstanding learning ability and full of potential</p>
                    <p className="text-lg mb-4">Blending a Bachelor's in Landscape Architecture with a Master's in Computing, 
                    I am an imaginative programmer ready to bring your vision to life. 
                    My unique mix of creative and technical acumen allows me to craft digital solutions that are not only efficient but also aesthetically engaging. 
                    As a quick learner with a diverse range of interests, 
                    I thrive in new challenges and adapt swiftly to emerging trends.
                     If you're seeking a resourceful and inventive individual who can infuse your projects with a fresh perspective, let's connect!</p>
                
                </div>
            </div>
        </div>
      </section>
    );
  };