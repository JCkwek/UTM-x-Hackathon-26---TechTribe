import React from 'react';
import styles from './SavingPockets.module.css';
import PocketCard from '../components/PocketCards';
import { useNavigate } from 'react-router-dom';

function SavingPockets() {
    const navigate = useNavigate();
    const myPockets = [
        { name: 'Emergency Fund', saved: 1200.00, target: 5000.00, progress: 24, icon: '🚨' },
        { name: 'New Laptop', saved: 2500.00, target: 4500.00, progress: 55, icon: '💻' },
        { name: 'Travel 2026', saved: 620.00, target: 1000.00, progress: 62, icon: '✈️' }
    ];

    const handleEdit = (name) => alert(`Editing target for ${name}`);

    return (
        <div className={styles.container}>
            <header className={styles.pocketsHeader}>
                <h2>My Pockets</h2>
                <button
                    className={styles.backBtn}
                    onClick={() => navigate(-1)}
                ></button>
                <button className={styles.addBtn}>+ Create New</button>
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