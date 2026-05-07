import styles from './Transactions.module.css';

function Transactions() {
    const monthlySummary = {
        income: 1800.00,
        spending: 198.90,
        autoSaved: 0.10,
        balanceImpact: 0.87
    };

    const categories = [
        {
            name: 'Food Delivery',
            icon: '🍔',
            spent: 178.90,
            budget: 180.00,
            status: 'Near limit'
        },
        {
            name: 'Transport',
            icon: '🚌',
            spent: 0.00,
            budget: 200.00,
            status: 'Healthy'
        },
        {
            name: 'Bills',
            icon: '🧾',
            spent: 20.00,
            budget: 150.00,
            status: 'Healthy'
        },
        {
            name: 'Leisure',
            icon: '🎮',
            spent: 0.00,
            budget: 100.00,
            status: 'Healthy'
        }
    ];

    const transactions = [
        {
            id: 1,
            merchant: 'TechTribe Sdn Bhd',
            category: 'Income',
            type: 'credit',
            amount: 1800.00,
            time: 'Today, 9:00 AM',
            note: ''
        },
        {
            id: 2,
            merchant: 'Grab Food',
            category: 'Food Delivery',
            type: 'debit',
            amount: 29.00,
            time: 'Today, 12:45 PM',
            note: 'Round-off saved RM0.10'
        },
        {
            id: 3,
            merchant: 'TNG Reload',
            category: 'Transport',
            type: 'debit',
            amount: 20.00,
            time: 'Yesterday, 6:30 PM',
            note: 'Transport budget updated'
        }
    ];

    const handleClick = (action) => {
        alert(`${action} clicked!`);
    };

    const getPercentage = (spent, budget) => {
        return Math.min(Math.round((spent / budget) * 100), 100);
    };

    return (
        <div className={styles.transactions}>
            {/* Header */}
            <header className={styles.header}>
                <div>
                    <h2>Transactions</h2>
                    <p>Transactions meet bookkeeping</p>
                </div>
            </header>

            {/* Monthly Summary */}
            <section className={styles.summaryCard}>
                <div className={styles.summaryTop}>
                    <div>
                        <p>Monthly Overview</p>
                        <h3>May 2026</h3>
                    </div>
                    <div className={styles.gxWatermark}>GX</div>
                </div>

                <div className={styles.summaryGrid}>
                    <div>
                        <p>Income</p>
                        <strong>RM {monthlySummary.income.toFixed(2)}</strong>
                    </div>

                    <div>
                        <p>Spending</p>
                        <strong>RM {monthlySummary.spending.toFixed(2)}</strong>
                    </div>

                    <div>
                        <p>Auto-saved</p>
                        <strong>RM {monthlySummary.autoSaved.toFixed(2)}</strong>
                    </div>

                    <div>
                        <p>Balance Impact</p>
                        <strong>+ RM {monthlySummary.balanceImpact.toFixed(2)}</strong>
                    </div>
                </div>
            </section>

            {/* Bookkeeping Breakdown */}
            <section className={styles.breakdownSection}>
                <div className={styles.sectionHeader}>
                    <h3>Bookkeeping Breakdown</h3>                 
                </div>

                <div className={styles.categoryList}>
                    {categories.map((category) => {
                        const percentage = getPercentage(category.spent, category.budget);

                        return (
                            <div key={category.name} className={styles.categoryCard}>
                                <div className={styles.categoryIcon}>{category.icon}</div>

                                <div className={styles.categoryContent}>
                                    <div className={styles.categoryTop}>
                                        <h4>{category.name}</h4>
                                        <span
                                            className={
                                                category.status === 'Near limit'
                                                    ? styles.warningStatus
                                                    : styles.normalStatus
                                            }
                                        >
                                            {category.status}
                                        </span>
                                    </div>

                                    <div className={styles.progressTrack}>
                                        <div
                                            className={styles.progressFill}
                                            style={{ width: `${percentage}%` }}
                                        ></div>
                                    </div>

                                    <div className={styles.categoryBottom}>
                                        <span>RM {category.spent.toFixed(2)}</span>
                                        <span>{percentage}% of RM {category.budget.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Transaction History */}
            <section className={styles.historySection}>
                <div className={styles.sectionHeader}>
                    <h3>Transaction History</h3>
                    <button onClick={() => handleClick('View History')}>
                        View History
                    </button>
                </div>

                <div className={styles.historyList}>
                    {transactions.map((transaction) => (
                        <div key={transaction.id} className={styles.historyItem}>                          
                            <div className={styles.historyInfo}>
                                <h4>{transaction.merchant}</h4>
                                <p>{transaction.category} · {transaction.time}</p>
                                <span>{transaction.note}</span>
                            </div>

                            <strong
                                className={
                                    transaction.type === 'credit'
                                        ? styles.creditAmount
                                        : styles.debitAmount
                                }
                            >
                                {transaction.type === 'credit' ? '+' : '-'} RM {transaction.amount.toFixed(2)}
                            </strong>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Transactions;