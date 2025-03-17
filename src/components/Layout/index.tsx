import React, { ReactNode, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const homes = useRef(null);

  const handleHomes = () => {
    if (homes.current) {
      (
        homes.current as {
          scrollIntoView: (options: ScrollIntoViewOptions) => void;
        }
      ).scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleHomes();
  }, []);

  return (
    <div ref={homes} className="Axiforma flex flex-col">
      {/* <Header/> */}
      <main>{children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
