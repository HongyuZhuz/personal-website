import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import axios from "axios";

const s3 = new S3({
    region:"ap-southeast-2",

    credentials: {
        accessKeyId:"a",
        secretAccessKey:"b",
    },

})

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