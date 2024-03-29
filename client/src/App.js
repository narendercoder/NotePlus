import { ToastContainer } from "react-toastify";
import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [loading, setloading] = useState(true);

  let [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light" );

  const handleThemeSwitch = () =>{
    setTheme(theme === "dark" ? "light" : "dark")
  }


  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', "dark")
    }
    else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', "light")
    }
  }, [theme])


  const lightTheme = {
    colors: {
      heading:{
        primary: "#000",
      },
      bg: {
        primary: "#fff",
        secondary: "#eff7fe",
      }
    }
  };
  const darkTheme = {
    colors: {
      heading:{
        primary: "#fff",
      },
      bg: {
        primary: "#262626",
        secondary: "#2e2e2e",
      }
    }
    
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
    // eslint-disable-next-line
  }, [localStorage]);

 
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     {
      loading ? <Preloader/> :  <div className="overflow-x-hidden dark:bg-[#202124]">
        <Routes>
          <Route path="/" element={<HomePage handleThemeSwitch={handleThemeSwitch} openModal={false} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/note/:id" element={<HomePage handleThemeSwitch={handleThemeSwitch} openModal={true}/>} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
     }
    </ThemeProvider>
  );
}

export default App;
