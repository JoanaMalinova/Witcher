import styles from "./RightSide.module.css";
import { useState } from "react";

function RightSide({ positionStyle, onClose }) {

    const [background, setBackground] = useState("/images/larger/witcher3game.jpg");
    const [filter, setFilter] = useState("blur(3px)");  

    const onMouseLeave = () => {
        setBackground("/images/larger/witcher3game.jpg");
        setFilter("blur(3px)");
    }

    const rightSideStyle = {
        background: `url(${background}) center top / cover`,
        right: positionStyle
    };

    return (
        <div
            className={styles["right-side"]}
            style={rightSideStyle}
        >
            <span className={styles.close} onClick={onClose}><i className="fa-solid fa-xmark"></i></span>
            <ul
                role="list"
                className={styles["games-list"]}                
                style={{ backdropFilter: filter }}
            >
                <li>
                    <a onMouseEnter={() =>{ setBackground("/images/witcher1.jpg"); setFilter("blur(0px)");} }
                        onMouseLeave={onMouseLeave}>
                        The W<span className={styles.red}>i</span>tcher
                    </a>
                </li>
                <li>
                    <a onMouseEnter={() => {setBackground("/images/witcher2.jpg"); setFilter("blur(0px)");}}
                        onMouseLeave={onMouseLeave}>
                        The W<span className={styles.red}>i</span>tcher
                        2: Assassins of Kings
                    </a>
                </li>
                <li>
                    <a onMouseEnter={() => {setBackground("/images/witcher3.jpg"); setFilter("blur(0px)");}}
                        onMouseLeave={onMouseLeave}>
                        The W<span className={styles.red}>i</span>tcher
                        3: W<span className={styles.red}>i</span>ld Hunt
                    </a>
                    <ul className={styles["witcher-3-list"]}>
                        <li>
                            <a onMouseEnter={() => {setBackground("/images/hearts.jpg"); setFilter("blur(0px)");}}
                                onMouseLeave={onMouseLeave}>...Hearts of Stone</a>
                        </li>
                        <li>
                            <a onMouseEnter={() => {setBackground("/images/wine.jpg"); setFilter("blur(0px)");}}
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