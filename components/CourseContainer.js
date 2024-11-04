import styles from "../styles/CourseContainer.module.css";
import Course from "../components/Course"
export default function CourseContainer(props){
    const courses = [];
    return(
        <div className={styles.container} id={props.lm ? null:"inverted"}>
            {courses}
            <button className={styles.button}>add class</button>
        </div>
    );
}