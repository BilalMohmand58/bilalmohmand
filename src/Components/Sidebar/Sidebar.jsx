import React, { useState } from "react";
import "./Sidebar.scss";
const Sidebar = () => {
  const [selected, setSelected] = useState("#intro");
  const [scroll, setScroll] = useState(false);
  const list = [
    {
      id: "#intro",
      href: "#intro",
      class: "fa-solid fa-house",
    },
    {
      id: "#portfolio",
      href: "#portfolio",
      class: "fa-solid fa-briefcase",
    },
    {
      id: "#blogs",
      href: "#blogs",
      class: "fa-solid fa-newspaper",
    },
    {
      id: "#testemonials",
      href: "#testemonials",
      class: "fa-solid fa-comment",
    },
    {
      id: "#contact",
      href: "#contact",
      class: "fa-solid fa-envelope",
    },
  ];

  return (
    <div class="controls">
      {list.map((item) => (
        <div
          onClick={() => setSelected(item.id)}
          setSelected={setSelected}
          className={selected === item.id ? "control active-btn" : "control"}
        >
          <a href={item.href}>
            <i class={item.class}></i>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
