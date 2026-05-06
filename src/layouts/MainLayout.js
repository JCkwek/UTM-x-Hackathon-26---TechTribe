import {Outlet} from "react-router-dom";
import styles from './MainLayout.module.css'
import TopNav  from "../components/TopNav";

function MainLayout(){
    return(
        <div className={styles.mainlayout}>
            <TopNav />
            <div className={styles.contentContainer}>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;