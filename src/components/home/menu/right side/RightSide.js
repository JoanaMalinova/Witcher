import styles from "./RightSide.module.css";

function RightSide({positionStyle, onClose}){

    return(
        <div
        className={styles["right-game"]}
        style={positionStyle}
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
    )
}

export default RightSide;