import styles from "../styles/CourseContainer.module.css";
import Course from "../components/Course";
export default function CourseContainer(props){
    const courses = [];
    return(
        <div className={styles.container} id={props.lm ? null:"inverted"}>
            {courses}
            <Course name="esof322"/>
            <Course name="csci331"/>
            <button className={styles.button}>add class</button>
        </div>
    );
}