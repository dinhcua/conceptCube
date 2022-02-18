import "./App.css";
import FirstPage from "./Components/Pages/Home/FirstPage/FirstPage";
import FivePage from "./Components/Pages/Home/FivePage/FivePage";
import FourthPage from "./Components/Pages/Home/FourthPage/FourthPage";
import SecondPage from "./Components/Pages/Home/SecondPage/SecondPage";
import ThirdPage from "./Components/Pages/Home/ThirdPage/ThirdPage";
import Sidemenu from "./Components/Common/SideMenu/SideMenu";
import Header from "./Components/Common/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Contact from "./Components/Pages/Contact/Contact";
import Teams from "./Components/Pages/Teams/Teams";
import Works from "./Components/Pages/Works/Works";
import RoutesPage from "./Components/Routers/RoutersPage";

function App() {
  return (
    <div className="App">
      {/* <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FivePage /> */}

      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Contact /> */}
      {/* <Teams /> */}
      {/* <Works /> */}
      <RoutesPage />
    </div>
  );
}

export default App;
