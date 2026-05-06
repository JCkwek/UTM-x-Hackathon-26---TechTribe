import styles from './Scanning.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Scanning() {
     const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/financial_advice');
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return(
        <div className={styles.container}>
            <div className={styles.cameraMock}>
                <div className={styles.overlay}>
                    <div className={styles.header}>
                        <button className={styles.backBtn} onClick={() => navigate(-1)}>✕</button>
                        <h2 className={styles.title}>Scan QR Code</h2>
                    </div>

                    <div className={styles.viewfinder}>
                        <div className={styles.laser}></div>
                        <div className={`${styles.corner} ${styles.topLeft}`}></div>
                        <div className={`${styles.corner} ${styles.topRight}`}></div>
                        <div className={`${styles.corner} ${styles.bottomLeft}`}></div>
                        <div className={`${styles.corner} ${styles.bottomRight}`}></div>
                    </div>

                    <div className={styles.footer}>
                        <p className={styles.hintText}>Place the QR code inside the frame</p>
                        <button className={styles.galleryBtn}>Upload from Gallery</button>
                    </div>
                </div>

                <img 
                    src="http://localhost:3000/assets/images/qrCode.jpg" 
                    alt="Camera Feed" 
                    className={styles.cameraImage} 
                />
            </div>
        </div>
    )
}

export default Scanning;