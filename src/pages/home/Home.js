import styles from "./Home.module.css"

function Home() {

    return (
        <section className={styles.banner}>
            <img src="images/larger/banner.jpg" alt="witcher-banner" />
            <div className={styles["heading-wrapper"]}>
                <h2 className={styles.smaller}>Welcome to</h2>
                <h1 className={styles.larger}>The Witcher</h1>
                <h2 className={styles.smaller}>Universe</h2>
            </div>
        </section>
    )
}

export default Home;