import styles from "./RightSide.module.css";
import { useState } from "react";

function RightSide({ positionStyle, onClose }) {

    const [background, setBackground] = useState("/images/larger/witcher3game.jpg");

    const onMouseLeave = () => {
        setBackground("/images/larger/witcher3game.jpg");    
    }   

    const rightSideStyle = {
        background: `url(${background}) center top / cover`,
        right : positionStyle
    };  

    return (
        <div
            className={styles["right-side"]}
            style={rightSideStyle}
        >
            <span className={styles.close} onClick={onClose}><i className="fa-solid fa-xmark"></i></span>
            <ul role="list" className={styles["games-list"]} >
                <li>
                    <a onMouseEnter={() => setBackground("/images/witcher1.jpg")}
                        onMouseLeave={onMouseLeave}>
                        The W<span className={styles.red}>i</span>tcher
                    </a>
                </li>
                <li>
                    <a onMouseEnter={() => setBackground("/images/witcher2.jpg")}
                        onMouseLeave={onMouseLeave}>
                        The W<span className={styles.red}>i</span>tcher
                        2: Assassins of Kings
                    </a>
                </li>
                <li>
                    <a onMouseEnter={() => setBackground("/images/witcher3.jpg")}
                        onMouseLeave={onMouseLeave}>
                        The W<span className={styles.red}>i</span>tcher
                        3: W<span className={styles.red}>i</span>ld Hunt
                    </a>
                    <ul className={styles["witcher-3-list"]}>
                        <li>
                            <a onMouseEnter={() => setBackground("/images/hearts.jpg")}
                        onMouseLeave={onMouseLeave}>...Hearts of Stone</a>
                        </li>
                        <li>
                            <a onMouseEnter={() => setBackground("/images/wine.jpg")}
                        onMouseLeave={onMouseLeave}>
                                ...Blood and W
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