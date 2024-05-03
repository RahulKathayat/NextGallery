import { db } from "~/server/db";

const Images = async () => {
    // fetch data in descending order by id
    const images = await db.query.images.findMany({
      orderBy: (model,{asc}) => asc(model.id),
    });
    return (
      <div className="flex flex-wrap gap-4">
        {
          [...images,...images,...images].map((data)=>(
            <div key={data.id} className="w-48 flex flex-col">
              <img src={data.url} alt="image" />
              <div>{data.name}</div>
            </div>
          ))
        }
      </div>
    )
}

export default Images;