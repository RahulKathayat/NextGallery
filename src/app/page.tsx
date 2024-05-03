import { db } from "~/server/db";
export const dynamic = "force-dynamic"

const mockData: string[] = [
  "https://utfs.io/f/7bd88e21-dd54-4821-ad69-34dfc4f9815e-2sc149.png",
  "https://utfs.io/f/b492653a-5520-43a4-82a0-fe8aa75d07f0-2sc0fa.png",
  "https://utfs.io/f/7bd88e21-dd54-4821-ad69-34dfc4f9815e-2sc149.png",
  "https://utfs.io/f/b492653a-5520-43a4-82a0-fe8aa75d07f0-2sc0fa.png",
  "https://utfs.io/f/7bd88e21-dd54-4821-ad69-34dfc4f9815e-2sc149.png",
  "https://utfs.io/f/b492653a-5520-43a4-82a0-fe8aa75d07f0-2sc0fa.png",
];

const mockUrls = mockData.map((data, index) => (
   {
    id: index+1,
    url: data,
  }
));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("DB data : ",posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (<div key={post.id}>{post.name}</div>))}
        {
          [...mockUrls,...mockUrls,...mockUrls].map((data,index)=>(
            <div key={data.id+'-'+index} className="w-48 ">
              <img src={data.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
