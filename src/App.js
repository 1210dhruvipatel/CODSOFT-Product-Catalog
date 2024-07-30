import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import Ring from "./components/Ring";
import Earring from "./components/Earring";
import Necklace from "./components/Necklace";
import Bracelet from "./components/Bracelet";
import Cart from "./components/Cart";
import Nav from "./Nav";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ring" element={<Ring cart={cart} setCart={setCart} qty={qty} />} />
          <Route path="/earring" element={<Earring cart={cart} setCart={setCart} qty={qty} />} />
          <Route path="/necklace" element={<Necklace cart={cart} setCart={setCart} qty={qty} />} />
          <Route path="/bracelet" element={<Bracelet cart={cart} setCart={setCart} qty={qty} />} />
          <Route path="/cart" element={<Cart cart={cart} total={total} setCart={setCart} setTotal={setTotal} qty={qty} setQty={setQty} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
