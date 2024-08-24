import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="container py-5 tracking-wider font-NA">
      <Header />
      <main>
        <Outlet /> {/* This is where nested routes will render their content */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
