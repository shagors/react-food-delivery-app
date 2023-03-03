import React from "react";
import Header from "../Header/Header";
import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Carts from "../UI/cart/Carts";

const Layout = () => {
  return (
    <div>
      <Header />

      <Carts />
      <div>
        <Routes />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
