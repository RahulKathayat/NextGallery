import { db } from "~/server/db";
export const dynamic = "force-dynamic"

export default async function HomePage() {
  // fetch data in descending order by id
  const images = await db.query.images.findMany({
    orderBy: (model,{asc}) => asc(model.id),
  });
  return (
    <main className="">
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
    </main>
  );
}
