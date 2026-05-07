import styles from './PocketCards.module.css';

const PocketCard = ({ pocket, onClick, onEditTarget }) => {
    return (
        <section className={styles.heroCard} onClick={onClick}>
            <div className={styles.heroLeft}>
                <div className={styles.pocketTitle}>
                    <span className={styles.heroIcon}>{pocket.icon || '💡'}</span>
                    <h3>{pocket.name}</h3>
                </div>

                <p className={styles.savedLabel}>Saved</p>
                <h1>RM {pocket.saved.toFixed(2)}</h1>

                <div className={styles.targetRow}>
                    <span>Target</span>
                    <strong>RM {pocket.target.toFixed(0)}</strong>
                    <button onClick={(e) => {
                        e.stopPropagation(); // Prevent card click
                        onEditTarget(pocket.name);
                    }}>✎</button>
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
    );
};

export default PocketCard;