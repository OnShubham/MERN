import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Page/Home";
import { Contact } from "./Page/Contact";
import { About } from "./Page/About";
import { Register } from "./Page/Register";
import { Login } from "./Page/Login";
import { Services } from "./Page/Services";
import { Navbar } from "./Components/Navbar";
import { Error404 } from "./Page/Error";
import { Footer } from "./Components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
