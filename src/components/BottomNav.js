import styles from './BottomNav.module.css'
// import { useNavigate } from "react-router-dom";

function BottomNav(){
    // const navigate = useNavigate();

    return(
        <div className={styles.bottomNav}>
            <button>Home</button>
            <button>Cards</button>
            <button>Pay</button>
            <button>Profile</button>
        </div>
    )
}

export default BottomNav;