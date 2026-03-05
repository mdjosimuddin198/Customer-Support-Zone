import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./banner/Banner";
import CustomerTickets from "./customerTickets/CustomerTickets";
import Footer from "./footer/Footer";

function App() {
  const [progressTaskCount, setprogrssTaskCount] = useState(0);
  const [resolveTaskCount, setresolveTaskCount] = useState(0);
  return (
    <>
      <header className="sticky bg-white  top-0 z-50">
        <Navbar />
      </header>
      <main className="bg-[#62738220] min-h-screen">
        <Banner
          progressTaskCount={progressTaskCount}
          resolveTaskCount={resolveTaskCount}
        />
        <CustomerTickets
          progressTaskCount={progressTaskCount}
          setprogrssTaskCount={setprogrssTaskCount}
          resolveTaskCount={resolveTaskCount}
          setresolveTaskCount={setresolveTaskCount}
        />
      </main>
      <footer className="bg-black">
        <Footer />
      </footer>
    </>
  );
}

export default App;
