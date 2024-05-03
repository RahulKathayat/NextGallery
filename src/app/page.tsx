import { SignedIn, SignedOut } from "@clerk/nextjs";
import Images from "./_components/Images";
export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex flex-col justify-center h-[36rem] overflow-hidden">
          <h1 className="text-2xl font-bold text-center">Welcome to the Image Gallery</h1>
          <h2 className="text-2xl font-bold text-center">Please Sign in to contiue ...</h2>
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
