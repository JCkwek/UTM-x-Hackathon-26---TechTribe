import styles from './Home.module.css';

function Home() {
    const handleClick = (action) => {
        alert(`${action} clicked!`);
    };

    return (
        <div className={styles.home}>
            {/* Header Area */}
            <header className={styles.header}>
                <div className={styles.greeting}>
                    <p style={{margin: 0, fontSize: '0.8rem', color: '#666'}}>Good morning,</p>
                    <h2>GX User</h2>
                </div>
                <div className={styles.profileIcon}>🔔</div>
            </header>
!
            {/* Main Balance Card */}
            <div className={styles.balanceCard}>
                <div className={styles.balanceLabel}>Main Account</div>
                <div className={styles.balanceAmount}>RM 1,250.00</div>
                <button 
                    onClick={() => handleClick('Add Money')}
                    style={{
                        backgroundColor: '#d1ff00', // Signature GX Green
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        marginTop: '10px'
                    }}
                >
                    + Add Money

                </button>
            </div>

            {/* Quick Actions */}
            <div className={styles.actionGrid}>
                {['Send', 'Receive', 'Scan', 'More'].map((item) => (
                    <div key={item} className={styles.actionItem} onClick={() => handleClick(item)}>
                        <div className={styles.iconCircle}>
                            {item === 'Send' && '💸'}
                            {item === 'Receive' && '📥'}
                            {item === 'Scan' && '🤳'}
                            {item === 'More' && '░'}
                        </div>
                        <span>{item}</span>
                    </div>
                ))}
            </div>

            {/* Savings Pockets Section */}
            <section>
                <h3 className={styles.sectionTitle}>Pockets</h3>
                <div className={styles.pocketCard}>
                    <div>
                        <div style={{fontWeight: 600}}>New Car Fund</div>
                        <div style={{fontSize: '0.8rem', color: '#666'}}>Earn 3.00% p.a.</div>
                    </div>
                    <div style={{fontWeight: 700}}>RM 500.00</div>
                </div>
            </section>
        </div>
    );
}

export default Home;