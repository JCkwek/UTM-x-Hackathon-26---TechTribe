import {Outlet} from "react-router-dom";
import './MainLayout.module.css'
import TopNav  from "../components/TopNav";

function MainLayout(){
    return(
        <div className="mainlayout">
            <TopNav />
            <div className="contentContainer">
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;