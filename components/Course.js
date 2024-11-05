import styles from "../styles/Course.module.css";
import Category from "../components/Category";
export default function Course(props){
    const categories = [];
    return(
        <div className={styles.container}>
                <p>{props.name}</p>
                {categories}
                <Category name="tests"/>
                <Category name="homework"/>
                <button className={styles.button}>add category</button>
        </div>
    );
}