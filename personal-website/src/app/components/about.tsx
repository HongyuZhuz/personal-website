

export const AboutMe = () => {
    return (
      <section className="about-me-section w-full bg-black">
        <div className="flex flex-col md:flex-row p-20">
            <ProfilePic/>
            <WhoIAm />
            
        </div>
      </section>
    );
  };

  const ProfilePic = () =>{
    return(
        <>
        <div className=" md:basis-1/2 flex justify-end">
            <img src=" /my-profile-pic.jpg" alt="Profile" className="object-cover border-2 border-red-500 w-50 h-80 mr-10 mt-10" />
        </div>
        </> 
    )
  }

  const WhoIAm = () =>{
    return(
        <div className=" md:basis-1/2 bg-black text-white p-10 max-w-md">
            <div className="mb-4">
                <h2 className="text-xl mb-2 text-red-500 md:text-2xl">ABOUT ME</h2>
                <h1 className="text-4xl font-bold mb-4 md:text-5xl">Who I am?</h1>
                <p className="text-lg mb-4 text-red-500">Outstanding learning ability and full of potential</p>
                <p className="text-sm mb-4 md:text-lg">Blending a Bachelor's in Landscape Architecture with a Master's in Computing, 
                    I am an imaginative programmer ready to bring your vision to life. 
                    My unique mix of creative and technical acumen allows me to craft digital solutions that are not only efficient but also aesthetically engaging. 
                    As a quick learner with a diverse range of interests, 
                    I thrive in new challenges and adapt swiftly to emerging trends.
                     If you're seeking a resourceful and inventive individual who can infuse your projects with a fresh perspective, let's connect!</p>
                
            </div>
        </div>

    )
  }