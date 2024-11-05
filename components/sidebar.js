import styles from "../styles/Sidebar.module.css"
export default function Sidebar(props){
    
    return(
        <div className={styles.container} id={props.lm ? null:"inverted"}>
            <button className={styles.button}>
                <img className={styles.icon} src="/save.svg"/>
            </button>

            <hr className={styles.rule}/>

            <button className={styles.button}>
                <img className={styles.icon} src="/open.svg"/>
            </button>

            <hr className={styles.rule}/>

            <button className={styles.button} onClick={props.setLm}>
                <img className={styles.icon} src={props.lm ? "/dark.svg":"/light.svg"}/>
            </button>

            <hr className={styles.rule}/>

            <button className={styles.button}>
                <img className={styles.icon} src="/info.svg"/>
            </button>

            <hr className={styles.rule}/>
        </div>
    );
}