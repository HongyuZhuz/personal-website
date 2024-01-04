import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import axios from "axios";
import { fromEnv } from '@aws-sdk/credential-provider-env';



const s3 = new S3({
    region: "ap-southeast-2",
    credentials: fromEnv(),
});


export default async function aws(file:File){
    try{
        
        const fileParams = {
            Bucket:"hyzawsbucket",
            Key:file.name,
        }
        console.log(process.env.KV_REST_API_READ_ONLY_TOKEN);

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