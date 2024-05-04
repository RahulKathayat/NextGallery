"use client";

import {SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { UploadButton } from '~/utils/uploadthing';
import { useRouter } from "next/navigation";

const TopNav = () => {
  const router = useRouter();
    return (
      <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallery</div>
        <div className='flex flex-row gap-4'>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UploadButton endpoint="imageUploader" onClientUploadComplete={
                  ()=>{
                    router.refresh();
                  }
                }/>
                <UserButton />
            </SignedIn>
        </div>
      </nav>
    );
}
export default TopNav;