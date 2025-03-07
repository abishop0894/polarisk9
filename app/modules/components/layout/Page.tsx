"use client";
import {HeroUIProvider} from "@heroui/react";
import Nav from "./Nav";

import Footer from "@/app/modules/components/layout/Footer";
const Page = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen overflow-y-auto overflow-x-hidden">
      <HeroUIProvider>
       <Nav/>
        {children}
        <Footer />
      </HeroUIProvider>
    </div>
  );
};

export default Page;
