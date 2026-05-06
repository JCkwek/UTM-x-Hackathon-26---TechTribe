import styles from './FinancialAdvice.module.css';
import { useNavigate } from 'react-router-dom';

function FinancialAdvice() {
    const transaction = {
        merchant: 'GrabFood',
        category: 'Food Delivery',
        amount: 28.90,
        currentSpent: 150.00,
        projectedSpent: 178.90,
        budgetLimit: 180.00,
        savingsGoal: 300.00,
        riskLevel: 'Medium Risk'
    };

    const usagePercent = Math.round(
        (transaction.projectedSpent / transaction.budgetLimit) * 100
    );

    const navigate = useNavigate();

    const handleClick = (action) => {
        if (action === 'Save RM10 instead') {
            navigate('/savings');
            return;
        }

        if (action === 'Cancel transaction') {
            navigate('/');
            return;
        }

        if (action === 'Continue payment') {
            alert('Payment continued!');
            navigate('/');
            return;
        }

        alert(`${action} clicked!`);
    };


    return (
        <div className={styles.advice}>
            {/* Header */}
            <header className={styles.header}>
                <button
                    className={styles.backBtn}
                    onClick={() => navigate(-1)}
                >
                    ←
                </button>

                <div className={styles.headerText}>
                    <h2>Financial Advice</h2>
                    <p>Before you continue</p>
                </div>

                <div className={styles.aiBadge}>
                    <span>🤖</span>
                    <strong>AI</strong>
                </div>
            </header>

            {/* Transaction Card */}
            <section className={styles.transactionCard}>
                <div className={styles.transactionTop}>
                    <div className={styles.merchantLogo}>
                        <span>Grab</span>
                        <strong>Food</strong>
                    </div>

                    <div>
                        <h3>{transaction.merchant}</h3>
                        <p>🍴 {transaction.category}</p>
                    </div>
                </div>

                <div className={styles.transactionBottom}>
                    <div>
                        <p className={styles.cardLabel}>Amount</p>
                        <h1>RM {transaction.amount.toFixed(2)}</h1>
                    </div>

                    <div className={styles.riskBlock}>
                        <p className={styles.cardLabel}>Risk Level</p>
                        <span className={styles.riskPill}>
                            📊 {transaction.riskLevel}
                        </span>
                    </div>
                </div>

                <div className={styles.gxWatermark}>GX</div>
            </section>

            {/* AI Advice Card */}
            <section className={styles.aiAdviceCard}>
                <div className={styles.robotCircle}>🤖</div>

                <p>
                    This purchase will bring your food delivery spending to{' '}
                    <strong>RM {transaction.projectedSpent.toFixed(2)}</strong>,
                    nearly reaching your monthly budget of{' '}
                    <strong>RM {transaction.budgetLimit.toFixed(0)}</strong>.
                    Making one more similar purchase may affect your{' '}
                    <strong>RM {transaction.savingsGoal.toFixed(0)}</strong>{' '}
                    savings goal.
                </p>
            </section>

            {/* Budget Progress */}
            <section className={styles.budgetCard}>
                <div className={styles.sectionHeader}>
                    <h3>Food Delivery Budget</h3>
                    <button onClick={() => handleClick('View details')}>
                        View details ›
                    </button>
                </div>

                <div className={styles.budgetInfo}>
                    <div>
                        <p>Spent</p>
                        <strong>RM {transaction.projectedSpent.toFixed(2)}</strong>
                    </div>

                    <div>
                        <p>Budget</p>
                        <strong>RM {transaction.budgetLimit.toFixed(2)}</strong>
                    </div>
                </div>

                <div className={styles.progressTrack}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${Math.min(usagePercent, 100)}%` }}
                    ></div>
                </div>

                <p className={styles.usageText}>{usagePercent}% used</p>
            </section>

            {/* Recommended Actions */}
            <section className={styles.actionsSection}>
                <h3>Recommended Actions</h3>

                <div className={styles.actionGrid}>
                    <button
                        className={styles.actionCard}
                        onClick={() => handleClick('Set RM15/day cap')}
                    >
                        <div className={styles.actionIcon}>🛡️</div>
                        <h4>Set RM15/day cap</h4>
                        <p>Stay within budget easily</p>
                        <span>›</span>
                    </button>

                    <button
                        className={styles.actionCard}
                        onClick={() => handleClick('Save RM10 instead')}
                    >
                        <div className={styles.actionIcon}>🐷</div>
                        <h4>Save RM10 instead</h4>
                        <p>Boost your savings goal</p>
                        <span>›</span>
                    </button>

                    <button
                        className={styles.actionCard}
                        onClick={() => handleClick('Start challenge')}
                    >
                        <div className={styles.actionIcon}>📅</div>
                        <h4>Start 3-day no-delivery challenge</h4>
                        <p>Build better habits</p>
                        <span>›</span>
                    </button>
                </div>
            </section>

            {/* Decision Buttons */}
            <div className={styles.decisionButtons}>
                <button
                    className={styles.cancelBtn}
                    onClick={() => handleClick('Cancel transaction')}
                >
                    Cancel
                </button>

                <button
                    className={styles.continueBtn}
                    onClick={() => handleClick('Continue payment')}
                >
                    Continue Pay
                </button>
            </div>
        </div>
    );
}

export default FinancialAdvice;