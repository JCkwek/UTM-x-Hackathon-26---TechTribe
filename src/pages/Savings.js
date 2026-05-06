import styles from './Savings.module.css';

function Savings() {
    const pocket = {
        name: 'Emergency Pocket',
        saved: 620.00,
        target: 1000.00,
        progress: 62
    };

    const autoSaveRules = [
        {
            id: 'round-off',
            icon: '🧾',
            title: 'Round-off Savings',
            description: 'Round every purchase to the nearest RM1',
            enabled: true
        },
        {
            id: 'salary',
            icon: '💳',
            title: 'Salary Trigger',
            description: 'Auto-transfer RM100 when salary arrives',
            enabled: true
        },
        {
            id: 'safe-sweep',
            icon: '🏦',
            title: 'Safe-to-Save Sweep',
            description: 'Move extra balance at month-end',
            enabled: true
        },
        {
            id: 'daily',
            icon: '📅',
            title: 'Daily Micro Save',
            description: 'Save RM2 every day automatically',
            enabled: true
        }
    ];

    const recentAutoSaves = [
        {
            id: 1,
            icon: '🍔',
            title: 'Round-off from GrabFood',
            amount: 'RM0.10',
            time: 'Today, 12:45 PM'
        },
        {
            id: 2,
            icon: '💳',
            title: 'Salary trigger',
            amount: 'RM100.00',
            time: 'Today, 9:00 AM'
        },
        {
            id: 3,
            icon: '📅',
            title: 'Daily micro save',
            amount: 'RM2.00',
            time: 'Yesterday, 8:00 AM'
        }
    ];

    const handleClick = (action) => {
        alert(`${action} clicked!`);
    };

    const handleToggle = (ruleTitle) => {
        alert(`${ruleTitle} toggle clicked!`);
    };

    return (
        <div className={styles.savings}>
            {/* Header */}
            <header className={styles.header}>
                <div>
                    <h2>Automated Saving</h2>
                    <p>Save effortlessly every day</p>
                </div>

                <button
                    className={styles.sparkleBtn}
                    onClick={() => handleClick('Saving settings')}
                >
                    ✨
                </button>
            </header>

            {/* Emergency Pocket Hero Card */}
            <section className={styles.heroCard}>
                <div className={styles.heroLeft}>
                    <div className={styles.pocketTitle}>
                        <span className={styles.heroIcon}>💡</span>
                        <h3>{pocket.name}</h3>
                    </div>

                    <p className={styles.savedLabel}>Saved</p>
                    <h1>RM {pocket.saved.toFixed(2)}</h1>

                    <div className={styles.targetRow}>
                        <span>Target</span>
                        <strong>RM {pocket.target.toFixed(0)}</strong>
                        <button onClick={() => handleClick('Edit target')}>✎</button>
                    </div>
                </div>

                <div className={styles.heroRight}>
                    <div
                        className={styles.circleProgress}
                        style={{
                            background: `conic-gradient(#38ef7d ${pocket.progress * 3.6}deg, rgba(255,255,255,0.12) 0deg)`
                        }}
                    >
                        <div className={styles.circleInner}>
                            <strong>{pocket.progress}%</strong>
                        </div>
                    </div>

                    <p>
                        RM {pocket.saved.toFixed(0)} / RM {pocket.target.toFixed(0)}
                    </p>
                </div>

                <div className={styles.gxWatermark}>GX</div>
            </section>

            {/* Auto-save Rules */}
            <section className={styles.rulesSection}>
                <h3>Auto-save Rules</h3>

                <div className={styles.rulesList}>
                    {autoSaveRules.map((rule) => (
                        <button
                            key={rule.id}
                            className={styles.ruleCard}
                            onClick={() => handleToggle(rule.title)}
                        >
                            <div className={styles.ruleIcon}>{rule.icon}</div>

                            <div className={styles.ruleText}>
                                <h4>{rule.title}</h4>
                                <p>{rule.description}</p>
                            </div>

                            <div
                                className={`${styles.toggle} ${
                                    rule.enabled ? styles.toggleOn : ''
                                }`}
                            >
                                <span></span>
                            </div>
                        </button>
                    ))}
                </div>
            </section>

            {/* AI Impact Insight */}
            <section className={styles.impactCard}>
                <div className={styles.robotIcon}>🤖</div>

                <p>
                    These rules could help you save{' '}
                    <strong>RM154</strong> more this month.
                </p>
            </section>

            {/* Recent Auto-saves */}
            <section className={styles.recentSection}>
                <div className={styles.sectionHeader}>
                    <h3>Recent Auto-saves</h3>
                    <button onClick={() => handleClick('View all auto-saves')}>
                        View all ›
                    </button>
                </div>

                <div className={styles.recentList}>
                    {recentAutoSaves.map((item) => (
                        <div key={item.id} className={styles.recentItem}>
                            <div className={styles.recentIcon}>{item.icon}</div>

                            <div className={styles.recentText}>
                                <h4>{item.title}</h4>
                            </div>

                            <div className={styles.recentAmount}>
                                <strong>{item.amount}</strong>
                                <span>{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <button
                className={styles.createRuleBtn}
                onClick={() => handleClick('Create New Rule')}
            >
                + Create New Rule
            </button>
        </div>
    );
}

export default Savings;