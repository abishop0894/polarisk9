

import Nav from "./Nav";

import Footer from "@/app/modules/components/layout/Footer";
import Widget from "@/app/modules/components/layout/Widget";
const Page = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen overflow-y-auto overflow-x-hidden">
      <Nav/>
        {children}
        <Widget />
        <Footer />
    </div>
  );
};

export default Page;
