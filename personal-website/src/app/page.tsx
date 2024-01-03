'use client'
import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'
import { MyEducationSection } from './components/education'
import { Designer } from './components/designer'
import { Footer } from './components/footer'
import { useState } from 'react'
import aws from '../../creatingAws'



export default function Home() {
  const [message, setMessage] = useState();
  const [file,setFile] = useState();

  function storeFile(e:any){
    console.log("test3");
    setFile(e.target.files[0]);
  }

  const uploadFile = async()=>{
    setMessage("uploading!");
    var returnData = await aws(file);//send file to api endpoint

    setMessage(String(returnData));
    setFile(null);
  }

  return (
    <>
    <div>
      <div className='flex bg-white w-full text-black p-20'>
        <p>Upload file:</p>
        <p className='text-red-500'>{message}</p>
        <input type="file" onChange = {(e)=>storeFile(e)}/>
        <input type = "button" onClick = {uploadFile} defaultValue = "Send"/>
      </div>
      <HeroSection />
      <AboutMe />
      <MyEducationSection />
      <Designer />
      <Footer />
    </div>
    
    </>
  )
}

