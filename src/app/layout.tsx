import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import TopNav from "./_components/TopNav";
import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Next Gallery",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal:React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
        <TopNav />
        {props.children}
        {props.modal}
        <div id="modal-root"/>
      </body>
    </html>
    </ClerkProvider>
  );
}
