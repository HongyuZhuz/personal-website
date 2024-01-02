import { HeroSection } from './components/heroSection'
import { AboutMe } from './components/about'
import { MyEducationSection } from './components/education'
import { Designer } from './components/designer'
import { Footer } from './components/footer'


import crypto from "crypto";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { GetServerSideProps } from 'next';


export const getServerSideProps: GetServerSideProps = async (context) => {
  // 这里可以获取数据，例如从 API 或其他服务
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.public.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };

  // 返回的 props 将会传递给页面组件
};
/*export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.public.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}*/

export default function Home({url}:{url:string}) {
  return (
    <>
    <div>
    <main>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const file = (e.target as HTMLFormElement).file.files?.[0]!;

          const image = await fetch(url, {
            body: file,
            method: "PUT",
            headers: {
              "Content-Type": file.type,
              "Content-Disposition": `attachment; filename="${file.name}"`,
            },
          });

          window.location.href = image.url.split("?")[0];
        }}
      >
        <input name="file" type="file" accept="image/png, image/jpeg" />
        <button type="submit">
          Upload
        </button>
      </form>
    </main>
      <HeroSection />
      <AboutMe />
      <MyEducationSection />
      <Designer />
      <Footer />
    </div>
    
    </>
  )
}


