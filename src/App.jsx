import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./banner/Banner";
import CustomerTickets from "./customerTickets/CustomerTickets";

function App() {
  const [progressTaskCount, setprogrssTaskCount] = useState(0);
  const [resolveTask, setResolveTask] = useState(0);
  return (
    <>
      <header className="sticky bg-white  top-0 z-50">
        <Navbar />
      </header>
      <main className="bg-[#62738220] min-h-screen">
        <Banner
          progressTaskCount={progressTaskCount}
          resolveTask={resolveTask}
        />
        <CustomerTickets
          progressTaskCount={progressTaskCount}
          setprogrssTaskCount={setprogrssTaskCount}
          resolveTask={resolveTask}
          setResolveTask={setResolveTask}
        />
      </main>
    </>
  );
}

export default App;
