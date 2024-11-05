import styles from "../styles/Assignment.module.css";
export default function Assignment(props){
    return(
        <div className={styles.container}>
            <p>{props.name}</p>
            <input type="number"/>
        </div>
    );
}