import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const Root = () => {
  return (
    <div>
      <div className="h-16">
      <NavBar></NavBar>
</div>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;