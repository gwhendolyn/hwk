import styles from "../styles/CourseContainer.module.css";
import Course from "./Course.js";
import React, { useState,useEffect, } from "react";
let nextID =0;

export default function CourseContainer(props){
    const [courses, setCourses] = useState([]);
    const [simplifiedState, setSimplifiedState] = useState({});
    useEffect(()=>{
        const storedState = JSON.parse(localStorage.getItem("simplifiedState"));
        if (storedState){
            fromSave(storedState);
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem("simplifiedState", JSON.stringify(simplifiedState));
    }, [JSON.stringify(simplifiedState)]);
    
    function fromSave(objState){
        var coursesTmp = [];
        for(const cou of Object.keys(objState)){
            coursesTmp = [...coursesTmp,<Course
            key={parseInt(cou)}
            id={parseInt(cou)}
            updateClass={updateClass}
            updateCat={updateCat}
            addCat={addCat}
            deleteCourse={deleteCourse}
            cats={structuredClone(objState[cou]["cats"])}
            em={false}
            nam={objState[cou]["nam"]}
            bp={objState[cou]["bp"]}
            pLock={objState[cou]["pLock"]}
            pLost={objState[cou]["pLost"]}/>];
            var temp = simplifiedState;
            temp[cou] = objState[cou];
            setSimplifiedState(structuredClone(temp));
        }
        nextID = coursesTmp.length;
        setCourses(courses.concat(coursesTmp));
    }
    const updateClass = (id,valName,newVal) =>{
        var temp = simplifiedState;
        temp[id][valName] = newVal;
        setSimplifiedState(structuredClone(temp));
    }
    const addCat = (classID,catID) =>{
        var temp = simplifiedState;
        temp[classID]["cats"][catID] = {};
        setSimplifiedState(structuredClone(temp));
    }

    const updateCat = (classID,catID,valName,newVal) =>{
        var temp = simplifiedState;
        temp[classID]["cats"][catID][valName] = newVal;
        setSimplifiedState(structuredClone(temp));
    }
    function addCourse() {
        setCourses([...courses,<Course key={nextID} id={nextID} updateClass={updateClass} addCat={addCat} updateCat={updateCat} deleteCourse={deleteCourse}/>]);
        var temp = simplifiedState;
        temp[nextID] = {'cats':{}};
        setSimplifiedState(structuredClone(temp));
        nextID++;
    }
    const deleteCourse = (k) => () =>{
        setCourses(courses.filter((cour)=>{return cour.key !== k}));
    }
    return(
        <div className={styles.container} id={props.lm ? null:"inverted"}>
            {courses}
            <button onClick={addCourse} className={styles.button}>
                <img className={styles.icon} src="/hwk/add.svg"/>
            </button>
        </div>
    );
}