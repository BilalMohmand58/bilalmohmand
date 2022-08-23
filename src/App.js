import TopBar from "./Components/TopBar/TopBar";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blogs from "./Components/Blogs/Blogs";
import Testemonials from "./Components/Testemonials/Testemonials";
import Contact from "./Components/Contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Sidebar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Blogs />
        <Testemonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
