import styles from "../styles/Sidebar.module.css"
export default function Sidebar(props){
    
    return(
        <div className={styles.container} id={props.lm ? null:"inverted"}>
            <button className={styles.button} onClick={props.toggleSave}>
                <img className={styles.icon} src="/hwk/save.svg"/>
            </button>

            <hr className={styles.rule}/>

            <button className={styles.button} onClick={props.toggleLoad}>
                <img className={styles.icon} src="/hwk/open.svg"/>
            </button>

            <hr className={styles.rule}/>

            <button className={styles.button} onClick={props.setLm}>
                <img className={styles.icon} src={props.lm ? "/hwk/dark.svg":"/hwk/light.svg"}/>
            </button>

            <hr className={styles.rule}/>

            <button className={styles.button} onClick={props.toggleInfo}>
                <img className={styles.icon} src="/hwk/info.svg"/>
            </button>

            <hr className={styles.rule}/>
        </div>
    );
}