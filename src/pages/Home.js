import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { MdSend, MdCallReceived, MdQrCodeScanner, MdOutlineMoreHoriz } from "react-icons/md";

function Home() {
    const navigate = useNavigate();

    const handleClick = (action) => {
        if (action === 'Scan' || action === 'Send') {
            navigate('/scanning');
            return;
        }

        if (action === 'Emergency Fund' || action === 'New Car Fund') {
            navigate('/savings');
            return;
        }

        alert(`${action} clicked!`);
    };

    return (
        <div className={styles.home}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.greeting}>
                    <p>Good morning,</p>
                    <h2>GX User</h2>
                </div>

                <button
                    className={styles.notificationBtn}
                    onClick={() => handleClick('Notification')}
                >
                    🔔
                    <span className={styles.notificationDot}></span>
                </button>
            </header>

            {/* Main Account Card */}
            <section className={styles.balanceCard}>
                <div className={styles.balanceTop}>
                    <div>
                        <span className={styles.balanceLabel}>Main Account</span>
                        <span className={styles.primaryPill}>Primary</span>
                    </div>
                    <div className={styles.gxWatermark}>GX</div>
                </div>

                <p className={styles.availableText}>Available Balance</p>

                <div className={styles.balanceBottom}>
                    <h1>RM 1,250.00</h1>

                    <button
                        className={styles.addMoneyBtn}
                        onClick={() => handleClick('Add Money')}
                    >
                        + Add Money
                    </button>
                </div>
            </section>

            {/* Quick Actions */}
            <section className={styles.quickActions}>
                {[
                    { label: 'Send', icon: <MdSend /> },
                    { label: 'Receive', icon: <MdCallReceived /> },
                    { label: 'Scan', icon: <MdQrCodeScanner /> },
                    { label: 'More', icon: <MdOutlineMoreHoriz /> }
                ].map((item) => (
                    <button
                        key={item.label}
                        className={styles.actionItem}
                        onClick={() => handleClick(item.label)}
                    >
                        <div className={styles.iconCircle}>{item.icon}</div>
                        <span>{item.label}</span>
                    </button>
                ))}
            </section>

            {/* AI Insight Section */}
            <section className={styles.insightSection}>
                <div className={styles.sectionHeader}>
                    <h3>AI Insight</h3>
                </div>

                <div className={styles.aiInsightCard}>
                    <div className={styles.aiRobot}>
                        🤖
                    </div>

                    <p>
                        You spent <strong>RM 150</strong> on food delivery this month.
                        Cutting back by <strong>RM 20</strong> this week can help you
                        stay on track for your <strong>RM 300</strong> savings goal.
                    </p>
                </div>

                <div
                    className={styles.emergencyInsight}
                    onClick={() => handleClick('Emergency Fund')}
                >
                    <div className={styles.shieldIcon}>🛡️</div>

                    <div className={styles.emergencyContent}>
                        <div className={styles.emergencyText}>
                            <span>Emergency Fund is</span>
                            <strong>62%</strong>
                            <span>complete</span>
                        </div>

                        <div className={styles.progressBar}>
                            <div className={styles.progressFill}></div>
                        </div>
                    </div>

                    <span className={styles.chevron}>›</span>
                </div>
            </section>

            {/* Pockets Section */}
            <section className={styles.pocketsSection}>
                <div className={styles.sectionHeader}>
                    <h3>Pockets</h3>
                    <button onClick={() => handleClick('View all pockets')}>
                        View all ›
                    </button>
                </div>

                <div
                    className={styles.pocketCard}
                    onClick={() => handleClick('New Car Fund')}
                >
                    <div className={styles.pocketIcon}>🚗</div>

                    <div className={styles.pocketInfo}>
                        <h4>New Car Fund</h4>
                        <p>Earn 3.00% p.a.</p>
                    </div>

                    <div className={styles.pocketAmount}>
                        <strong>RM 500.00</strong>
                        <span>›</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;