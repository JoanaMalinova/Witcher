import styles from "./Home.module.css";
import { useState } from "react";

function Home() {

    const [position, setPosition] = useState("");   

    const onGamesClick = () => {
        setPosition("0");       
    };

    const onClose =() =>{
        setPosition("-50%");
    }

    const leftPositionStyles = {
        left: position,
    };

    const rightPositionStyles = {
        right: position,
    };

    return (
        <div className={styles["home-wrapper"]}>
            <section className={styles.banner}>
                <video
                    autoPlay="autoplay"
                    muted="muted"
                    loop="loop"
                    className={styles["banner-video"]}
                >
                    <source src="images/fog-animation.mov" type="video/mp4" />
                </video>
                <img src="images/larger/banner.png" alt="witcher-banner" />
                <div className={styles["right-container"]}>
                    <nav className={styles.navigation}>
                        <ul role="list">
                            <li onClick={onGamesClick}>Games</li>
                            <li>
                                Ser<span className={styles["red-nav"]}>i</span>
                                es
                            </li>
                            <li>Books</li>
                        </ul>
                    </nav>
                    <div className={styles["heading-wrapper"]}>
                        <h2 className={styles.smaller}>Welcome to</h2>
                        <h1 className={styles.larger}>
                            The W<span className={styles.red}>i</span>tcher
                        </h1>
                        <h2 className={styles.smaller}>
                            Un<span className={styles.red}>i</span>verse
                        </h2>
                        <blockquote>
                            <p>
                                But do you know when stories stop being stories?
                                The moment someone begins to believe in them.
                            </p>
                            <span>-Andzej Sapkowski</span>
                        </blockquote>
                    </div>
                </div>
            </section>
            <section className={styles.games}>
                <div className={styles["left-game"]} style={leftPositionStyles}>
                    <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/B00E5f7-yz4"
                    ></iframe>
                     <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/HedLjjlSy3Y"
                    ></iframe>
                     <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/1-l29HlKkXU"
                    ></iframe>
                     <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/MQ2_2Rik3y4"
                    ></iframe>
                     <iframe
                        width="250"
                        height="200"
                        src="https://www.youtube.com/embed/UZP1W6D6aZA"
                    ></iframe>
                </div>
                <div
                    className={styles["right-game"]}
                    style={rightPositionStyles}
                >
                    <span className={styles.close} onClick={onClose}><i class="fa-solid fa-xmark"></i></span>
                    <ul role="list" className={styles["games-list"]}>
                        <li>
                            <a>
                                The W<span className={styles.red}>i</span>tcher
                            </a>
                        </li>
                        <li>
                            <a>
                                The W<span className={styles.red}>i</span>tcher
                                2: Assassins of Kings
                            </a>
                        </li>
                        <li>
                            <a>
                                The W<span className={styles.red}>i</span>tcher
                                3: W<span className={styles.red}>i</span>ld Hunt
                            </a>
                            <ul className={styles["witcher-3-list"]}>
                                <li>
                                    <a href="">Hearts of Stone</a>
                                </li>
                                <li>
                                    <a href="">
                                        Blood and W
                                        <span className={styles.red}>i</span>ne
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
}

export default Home;
