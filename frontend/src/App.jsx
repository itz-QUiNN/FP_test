import React from "react";
import { Route, Routes } from "react-router";
import toast from "react-hot-toast";

import Navbar from "./components/Navbar";
import OrdersPage from "./pages/OrdersPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <OrdersPage />
    </div>
  );
};

export default App;
