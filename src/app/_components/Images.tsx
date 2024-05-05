import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/db/queries";

const Images = async () => {
    const images = await getMyImages();
    return (
      <div className="flex flex-wrap gap-4 justify-center p-4">
        {
          images.map((data)=>(
              <div key={data.id} className="w-48 h-48 flex flex-col">
                <Link key={data.id} href={`/img/${data.id}`}>
                  <Image src={data.url} alt="image" style={{objectFit:"contain"}} width={192} height={192}/>
                </Link>  
                <div>{data.name}</div>
              </div>
          ))
        }
      </div>
    )
}

export default Images;