import styles from "./LeftSide.module.css";
import ReactPlayer from "react-player";

function LeftSide({ positionStyle }) {
    return (
        <div className={styles["left-side"]} style={positionStyle}>
            <div>
                <h1>The Witcher</h1>                
            </div>           
            <ReactPlayer
                width={600}
                height={400}
                url="https://www.youtube.com/embed/B00E5f7-yz4"
                playing={true}
            />           
            <div className={styles.description}>
                <p>
                    The game is centered around Geralt of Rivia, who is found
                    unconscious and suffering from amnesia at the beginning of
                    the game. He gradually learns that he was a renowned
                    witcher, and that he has friends and enemies almost
                    everywhere (who do not suffer from amnesia...). Through the
                    player's actions, he will redefine those relationships and
                    choose his path in the political intrigue that surrounds
                    him.
                </p>
            </div>
        </div>
    );
}

export default LeftSide;
