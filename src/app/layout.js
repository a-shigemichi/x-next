import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News"
import SessionWrapper from "@/components/SessionWrapper";
import CommentModal from "@/components/CommentModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "A clone of X website built with React.js and Taiwind css",
};

export default function RootLayout({ children }) {
  return (
    <SessionWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex justify-between max-w-6xl mx-auto">
            <div className="hidden sm:inline border-r h-screen">
              <Sidebar />
            </div>
            <div>{children}</div>
            <div className="lg:flex-col p-3 h-screen border-l hidden lg:flex w-[24rem]">
              <div className="sticky top-0 bg-white py-2">
                <input type='text' placeholder="Search" className="bg-gray-100 
                border-gray-200 rounded-3xl text-sm w-full px-4 py-2"></input>
              </div>
              <div>
              <News />
              </div>
            </div>
              
            
          </div>
          <CommentModal/>
        </body>
      </html>
    </SessionWrapper>
  );
}
