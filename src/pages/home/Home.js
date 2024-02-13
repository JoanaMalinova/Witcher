import styles from "./Home.module.css";
import Banner from "../../components/home/banner/Banner";
import Menu from "../../components/home/menu/Menu";
import { useState } from "react";

function Home() {     
    
    const [position, setPosition] = useState("");   

    return (
        <div className={styles["home-wrapper"]}>
            <Banner setPosition= {setPosition}/>
            <Menu position= {position} setPosition= {setPosition} />
        </div>
    );
}

export default Home;
