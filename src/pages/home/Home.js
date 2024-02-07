import styles from "./Home.module.css";
import { useState } from "react";

function Home() {

    const [leftPosition, setLeftPosition] = useState("");
    const [rightPosition, setRightPosition] = useState("");

    const onGamesClick = () => {
        setLeftPosition("0");
        setRightPosition("0");
        console.log(leftPosition);
        console.log(rightPosition);
    }

    const leftPositionStyles = {
        left: leftPosition
    }

    const rightPositionStyles = {
        right: rightPosition
    }

    return (
        <div className={styles["home-wrapper"]}>
            <section className={styles.banner}>
                <video autoPlay="autoplay" muted="muted" loop="loop" className={styles["banner-video"]} >
                    <source src="images/fog-animation.mov" type="video/mp4" />
                </video>
                <img src="images/larger/banner.png" alt="witcher-banner" />
                <div className={styles["right-container"]}>
                    <nav className={styles.navigation}>
                        <ul role="list">
                            <li onClick={onGamesClick}>Games</li>
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
            <section className={styles.games}>
                <div className={styles["left-game"]} style={leftPositionStyles} ></div>
                <div className={styles["right-game"]} style={rightPositionStyles}>
                   <ul role="list" className={styles["games-list"]}>
                    <li>
                        <a>The Witcher</a>
                    </li>
                    <li>
                        <a>The Witcher 2: Assassins of Kings</a>
                    </li>
                    <li>
                        <a>The Witcher 3: Wild Hunt</a>
                        <ul>
                            <li>
                                <a href="">Hearts of Stone</a>
                            </li>
                            <li>
                                <a href="">Blood and Wine</a>
                            </li>
                        </ul>
                    </li>
                   </ul>
                </div>
            </section>
        </div>
    )
}

export default Home;