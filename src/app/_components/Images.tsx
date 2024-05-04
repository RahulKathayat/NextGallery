import Image from "next/image";
import { getMyImages } from "~/server/db/queries";

const Images = async () => {
    const images = await getMyImages();
    return (
      <div className="flex flex-wrap gap-4 justify-center">
        {
          images.map((data)=>(
            <div key={data.id} className="w-48 h-48 flex flex-col">
              <Image src={data.url} alt="image" style={{objectFit:"contain"}} width={192} height={192}/>
              <div>{data.name}</div>
            </div>
          ))
        }
      </div>
    )
}

export default Images;