import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, S3, S3Client } from "@aws-sdk/client-s3";
import axios from "axios";
import { fromEnv } from '@aws-sdk/credential-provider-env';



const s3 = new S3Client({
    region: "ap-southeast-2",
    credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY
    }
});


export default async function aws(file:File){
    
    try{
        
        const fileParams = {
            Bucket:"hyzawsbucket",
            Key:file.name,
        }
        

        const url = await getSignedUrl(s3, new PutObjectCommand(fileParams),{expiresIn:3600});
        console.log(url)
        await axios.put(url, file, {
            headers:
            {
                "Content-type":String(file.type)
            }
        })

        return "Uploaded!";
    }
    catch(err){
        return err;
    }

}