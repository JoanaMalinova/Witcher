import styles from "./LeftSide.module.css";
import ReactPlayer from "react-player";

function LeftSide({positionStyle}){

    return(
        <div className={styles["left-side"]} style={positionStyle}>
            <ReactPlayer
                width={700}
                height={500}
                url="https://www.youtube.com/embed/B00E5f7-yz4"
                playing={true}
            />    
        </div>
    )
}

export default LeftSide;