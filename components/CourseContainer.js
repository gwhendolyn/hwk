import styles from "../styles/CourseContainer.module.css";
import Course from "./Course.js";
import React, { useState,useEffect, } from "react";
let nextID =0;

export default function CourseContainer(props){
    //#region --state and effect hooks--

    //tracks the current array of courses
    const [courses, setCourses] = useState([]);

    //tracks the current state of all children to be used for saving/loading
    const [simplifiedState, setSimplifiedState] = useState({});
    
    //on mount, loads state from localStorage if a valid state is stored there
    useEffect(()=>{
        var storedState;
        try {
            storedState = JSON.parse(localStorage.getItem("simplifiedState"));
        } catch (error) {
            storedState = {};
        }
        if (storedState){
            fromSave(storedState);
        }
    }, []);

    //updates localStorage when simplifiedState is updated
    useEffect(()=>{
        localStorage.setItem("simplifiedState", JSON.stringify(simplifiedState));
    }, [JSON.stringify(simplifiedState)]);
    //#endregion

    //#region --functions--

    //passes the values from the state to be loaded into children props
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

    //updates the state of a single class in simplifiedState
    const updateClass = (id,valName,newVal) =>{
        var temp = simplifiedState;
        temp[id][valName] = newVal;
        setSimplifiedState(structuredClone(temp));
    }

    //adds a category to a class in simplifiedState
    const addCat = (classID,catID) =>{
        var temp = simplifiedState;
        temp[classID]["cats"][catID] = {};
        setSimplifiedState(structuredClone(temp));
    }

    //updates the state of a single category in simplifiedState
    const updateCat = (classID,catID,valName,newVal) =>{
        var temp = simplifiedState;
        temp[classID]["cats"][catID][valName] = newVal;
        setSimplifiedState(structuredClone(temp));
    }

    //adds a course object to simplifiedState
    function addCourse() {
        setCourses([...courses,<Course key={nextID} id={nextID} updateClass={updateClass} addCat={addCat} updateCat={updateCat} deleteCourse={deleteCourse}/>]);
        var temp = simplifiedState;
        temp[nextID] = {'cats':{}};
        setSimplifiedState(structuredClone(temp));
        nextID++;
    }

    //removes a course childe from courses state as well as from simplifiedState
    const deleteCourse = (k) =>{
        setCourses((prevCourses) => {return prevCourses.filter((cour) => parseInt(cour.key) !== k);});
        var temp = simplifiedState;
        delete temp[k];
        setSimplifiedState(structuredClone(temp));
    }
    //#endregion

    //#region --main render--
    return(
        <div className={styles.container} id={props.lm ? null:"inverted"}>
            {courses}
            <button onClick={addCourse} className={styles.button}>
                <img className={styles.icon} src="/hwk/add.svg"/>
            </button>
        </div>
    );
    //#endregion
}