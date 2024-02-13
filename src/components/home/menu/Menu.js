import styles from "./Menu.module.css";
import LeftSide from "./left side/LeftSide";
import RightSide from "./right side/RightSide";

function Menu({ setPosition, position }) {

    const onClose = () => {
        setPosition("-50%");
    }

    const leftPositionStyles = {
        left: position,
    };

    const rightPositionStyles = position;

    return (
        <section className={styles.menu}>
            <LeftSide positionStyle={leftPositionStyles}/>
            <RightSide positionStyle={rightPositionStyles} onClose={onClose} />
        </section>
    )
}

export default Menu;