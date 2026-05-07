import React from 'react';
import styles from './SavingPockets.module.css';
import PocketCard from '../components/PocketCards';
import { useNavigate } from 'react-router-dom';

function SavingPockets() {
    const navigate = useNavigate();
    const myPockets = [
        { name: 'Emergency Fund', saved: 350.00, target: 400.00, progress: 87.5, icon: '🚨' },
        { name: 'New Laptop', saved: 150.00, target: 300.00, progress: 50, icon: '💻' },
        { name: 'Travel 2026', saved: 120.00, target: 300.00, progress: 40, icon: '✈️' }
    ];

    const handleEdit = (name) => alert(`Editing target for ${name}`);

    return (
        <div className={styles.container}>
            <header className={styles.pocketsHeader}>
                <div className={styles.headerBtn}>
                    <button className={styles.backBtn}  onClick={() => navigate(-1)}>←</button>
                    <h2>My Pockets</h2>
                    <button className={styles.addBtn}>+</button>
                </div>
            </header>

            <div className={styles.pocketsGrid}>
                {myPockets.map((pocket, index) => (
                    <PocketCard 
                        key={index} 
                        pocket={pocket} 
                        onEditTarget={handleEdit}
                    />
                ))}
            </div>
        </div>
    );
}

export default SavingPockets;