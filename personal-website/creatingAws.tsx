import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PutObjectCommand, S3 } from "@aws-sdk/client-s3";
import axios from "axios";


const s3 = new S3({
    region: "ap-southeast-2",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY_ID || "", // 确保 accessKeyId 是一个字符串
      secretAccessKey: process.env.SECRET_ACCESS_KEY || "", // 确保 secretAccessKey 是一个字符串
    },
  });

export default async function aws(file:File){
    try{
        
        const fileParams = {
            Bucket:"hyzawsbucket",
            Key:file.name,
        }
        console.log(process.env.KV_REST_API_READ_ONLY_TOKEN);
        console.log(process.env.ACCESS_KEY_ID)

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