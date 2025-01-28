import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import LogTable from "./LogTable.jsx";
import Maps from "./Map.jsx";
import Nav from "./Nav.jsx";
import HeaderCard from "./HeaderCard.jsx";
import PieChart from "./PieChart.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <HeaderCard />
    <div className="flex flex-col lg:flex-row gap-4 mt-5 px-4 min-h-screen lg:px-8">
      <div className="flex-1 bg-white rounded-sm shadow-md h-full pb-5">
        <PieChart />
      </div>
      <div className="flex-1 bg-white rounded-sm shadow-md min-h-[300px] h-full">
        <Maps />
      </div>
    </div>

    {/* <LogTable /> */}
  </StrictMode>
);
