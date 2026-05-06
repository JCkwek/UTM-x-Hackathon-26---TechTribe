import {Outlet} from "react-router-dom";
import styles from './MainLayout.module.css'
import BottomNav  from "../components/BottomNav";

function MainLayout(){
    return(
        <div className={styles.mainlayout}>
            <div className={styles.contentContainer}>
                <Outlet />
            </div>
            <BottomNav />
        </div>
    );
}

export default MainLayout;