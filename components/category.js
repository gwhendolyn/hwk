import styles from  "../styles/Category.module.css"
import Assignment from "../components/Assignment"
const assignments =[];
export default function Category(props){
    return(
        <div className={styles.container}>
            <p>{props.name}</p>
            <div className={styles.assignments}>
                {assignments}
            </div>
        </div>
    );
}