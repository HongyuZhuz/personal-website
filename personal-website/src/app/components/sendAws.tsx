'use client'
import { useState } from 'react'
import aws from '../API/creatingAws';

export const SendAws=() =>{
    const [message,setMessage] = useState();
    const [file, setFile] = useState();

    function storeFile(e)
    {
    setFile(e.target.files[0]);
  }

  const uploadFile = async()=>{
    setMessage("uploading!");

    var returnData = await aws(file);
    setMessage(String(returnData));

    setFile(null);
  }

  return(
    <div className='bg-white p-10'>
    <p>Upload file:</p>
    <p className='text-red-500'>{message}</p>
    <input type = 'file' onChange = {(e)=>storeFile(e)}/>
    <input type = "button" onClick={uploadFile} defaultValue = "Send"/>
    <p></p>
    </div>
    
  )


}