import styles from "./LeftSide.module.css"

function LeftSide({positionStyle}){

    return(
        <div className={styles["left-side"]} style={positionStyle}>
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
    )
}

export default LeftSide;