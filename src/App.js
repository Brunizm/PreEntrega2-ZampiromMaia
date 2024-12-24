import React from "react";
import NavBar from "./components/NavBar"; 
import ItemListContainer from "./components/ItemListContainer"; 

const App = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavBar />

      {/* Greeting Container */}
      <ItemListContainer greeting="Welcome to Coffee Store!" />
    </div>
  );
};

export default App; 
