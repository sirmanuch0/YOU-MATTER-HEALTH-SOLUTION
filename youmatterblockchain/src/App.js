import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Pending from "./pages/Pending";
import History from "./pages/History";
import Deposit from "./pages/Deposit";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route exact path="/deposit" element={<Deposit />} />

          <Route exact path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="pending" element={<Pending />} />
            <Route path="history" element={<History />} />
            <Route path="Deposit" element={<Deposit />} />
          </Route>

        </Routes>
        
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
