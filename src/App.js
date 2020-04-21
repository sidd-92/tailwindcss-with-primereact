import React from "react";
import logo from "./logo.svg";
import MenuNav from "./components/MenuNav/MenuNav.js";
import CardComponent from "./components/CardComponent/CardComponent";

function App() {
  return (
    <div class="w-full bg-green-100">
      <MenuNav />
      <div className="w-1/2 mx-auto py-5">
        <CardComponent />
      </div>
    </div>
  );
}

export default App;
