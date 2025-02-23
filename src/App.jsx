
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage"; // Ensure HomePage is correctly placed
import "./App.css";

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div style={styles.container}>
      <Navbar 
        openLogin={() => setIsLoginOpen(true)} 
        openRegister={() => setIsRegisterOpen(true)} 
      />
      <HomePage />

      {/* Login and Register Modals */}
      <Login isOpen={isLoginOpen} closeLogin={() => setIsLoginOpen(false)} />
      <Register isOpen={isRegisterOpen} closeRegister={() => setIsRegisterOpen(false)} />
    </div>
  );
};

// CSS Styles
const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#FFD700",
    display: "flex",
    flexDirection: "column",
  },
};

export default App;
