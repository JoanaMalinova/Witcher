import styles from "./Home.module.css"

function Home() {

    return (
        <section className={styles.banner}>
            <img src="images/larger/banner.jpg" alt="witcher-banner" />
            <div className={styles["right-container"]}>
                <nav className={styles.navigation}>
                    <ul role="list">
                        <li>Games</li>
                        <li>Ser<span className={styles["red-nav"]}>i</span>es</li>
                        <li>Books</li>
                    </ul>
                </nav>
                <div className={styles["heading-wrapper"]}>
                    <h2 className={styles.smaller}>Welcome to</h2>
                    <h1 className={styles.larger}>The W<span className={styles.red}>i</span>tcher</h1>
                    <h2 className={styles.smaller}>Un<span className={styles.red}>i</span>verse</h2>
                    <blockquote>
                        <p>But do you know when stories stop being stories? The moment someone begins to believe in them.</p>
                        <span>-Andzej Sapkowski</span>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default Home;