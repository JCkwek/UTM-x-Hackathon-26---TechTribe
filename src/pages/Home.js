import styles from './Home.module.css'

 const handleClick = () => {
        alert("Button clicked!")
    }


function Home(){
    return(
        <div className={styles.home}>
            <div className={styles.homeContentContainer}>
                <h2>GXBank home page</h2>

                <br /><br />

                <button onClick={handleClick}>
                    Click Me Now!!!
                </button>
            </div>
        </div>
    )
}

export default Home;