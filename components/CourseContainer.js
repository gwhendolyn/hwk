import styles from "../styles/CourseContainer.module.css";
import Course from "../components/Course.js";
import React, { useState } from "react";
let nextID =0;
export default function CourseContainer(props){
    const [courses, setCourses] = useState([]);
    function addCourse() {
        setCourses([...courses,<Course key={nextID++}/>]);
    }
    return(
        <div className={styles.container} id={props.lm ? null:"inverted"}>
            {courses}
            <button onClick={addCourse} className={styles.button}>
                <img className={styles.icon} src="/add.svg"/>
            </button>
        </div>
    );
}