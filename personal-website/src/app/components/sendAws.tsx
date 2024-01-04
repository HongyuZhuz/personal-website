'use client'
import { useState } from 'react';

export const SendAws = () => {
    const [message, setMessage] = useState('');
    const [file, setFile] = useState(null);

    const uploadFile = async () => {
        if (!file) {
            setMessage("No file selected!");
            return;
        }

        setMessage("Getting upload URL...");

        try {
            const response = await fetch('/api/upload.ts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fileName: file.name,
                    contentType: file.type
                })
            });

            const { url } = await response.json();

            setMessage("Uploading...");

            const s3Response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': file.type
                },
                body: file
            });

            if (s3Response.ok) {
                setMessage("File successfully uploaded.");
            } else {
                setMessage("Upload to S3 failed.");
            }
        } catch (error) {
            setMessage("An error occurred.");
        }
    };
    const setA = (e) =>{
        setFile(e.target.files[0])
    }

    return (
        <div className='bg-white p-10'>
            <p>Upload file:</p>
            <p className='text-red-500'>{message}</p>
            <input type='file' onChange={(e) => setA(e)} />
            <button onClick={uploadFile}>Send</button>
        </div>
    );
};