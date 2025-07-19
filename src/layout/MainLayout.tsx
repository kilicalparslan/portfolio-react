import React from "react";
import Navbar from "../components/Navbar";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-homeBg min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div className="z-50">
        <div className="container">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
