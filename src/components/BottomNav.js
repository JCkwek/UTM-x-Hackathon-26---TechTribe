import styles from './BottomNav.module.css';
import { useNavigate, useLocation } from "react-router-dom";
import { BsHouseDoorFill, BsTrophyFill, BsHeartFill, BsReceiptCutoff  } from "react-icons/bs";

function BottomNav(){
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { path: '/', icon: <BsHouseDoorFill size={24} />, label: 'Home', id: 'home' },
        { path: '/savings', icon: <BsHeartFill size={24} />, label: 'Savings', id: 'savings' },
        { path: '/transactions', icon: <BsReceiptCutoff size={24} />, label: 'Transaction', id: 'transactions' },
        { path: '/challenges', icon: <BsTrophyFill size={24} />, label: 'Challenges', id: 'challenges' }

    ];

    return(
        <nav className={styles.bottomNav}>
            <div className={styles.navContainer}>
                {navItems.map(item => (
                    <button
                        key={item.id}
                        className={`${styles.navItem} ${location.pathname === item.path ? styles.active : ''}`}
                        onClick={() => navigate(item.path)}
                    >
                        <span className={styles.navIcon}>{item.icon}</span>
                        <span className={styles.navLabel}>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default BottomNav;