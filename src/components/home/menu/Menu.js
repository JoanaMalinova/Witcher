import styles from "./Menu.module.css";

function Menu({setPosition, position}){

    const onClose =() =>{
        setPosition("-50%");
    }

    const leftPositionStyles = {
        left: position,
    };

    const rightPositionStyles = {
        right: position,
    };

    return(
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
    )
}

export default Menu;