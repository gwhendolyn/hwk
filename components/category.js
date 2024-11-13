import styles from  "../styles/Category.module.css"
import React, { useState, useEffect } from "react";

export default function Category(props){
    const [name, setName] = useState((props.nam == null)?"New Category":props.nam);
    const [weight, setWeight] = useState((props.wght == null)?0:props.wght);
    const [assignments, setAssignments] = useState((props.ass == null)?[]:props.ass);
    const [editMode, setEditMode] = useState((props.em == null)?true:props.em);
    useEffect(()=>{
        props.updateCat(props.classID,props.id,"nam",name);
        props.updateCat(props.classID,props.id,"wght",weight);
        props.updateCat(props.classID,props.id,"ass",assignments);
    }, [name,weight,assignments]);
    useEffect(()=>{
        var newLocked = 0;
        var newLost = 0;
        for (const a of assignments){
            if(!isNaN(parseInt(a[1]))){
                newLocked += parseInt(a[1]);
                newLost += 100-parseInt(a[1]);
            }
        }
        if(!assignments.length == 0){
            newLocked /= assignments.length;
            newLost /= assignments.length;
        }
        newLocked *= (parseInt(weight)/100);
        newLost *= (parseInt(weight)/100);

 
        props.updateLocked(newLocked,props.id);
        props.updateLost(newLost,props.id);

    }, [assignments]);

    function editToggle(){
        setEditMode(!editMode);
    }
    function changeName(event){
        setName(event.target.value);
    }
    function changeWeight(event){
        setWeight(event.target.value);
    }
    function addAssignment(){
        setAssignments([...assignments,[assignments.length+1,'']]);
    }
    const changeAssName = (index) => (event) =>{
        setAssignments(assignments.map((a,i) => {return (i == index)? [event.target.value,a[1]]:a}));
    }
    const changeAssGrade = (index) => (event) =>{
        setAssignments(assignments.map((a,i) => {return (i == index)? [a[0],event.target.value]:a}));
    }
    return(
        <div>
            {editMode ? (
            <div className={styles.container}>
                <p>Name:</p> 
                <input type="text" value={name} onChange={changeName} onFocus={(e) => {e.target.select()}}/> 
                <p>Weight</p> 
                <input type="number" value={weight} onChange={changeWeight} onFocus={(e) => {e.target.select()}}/> 
                <button onClick={editToggle}>finish editing</button>
            </div>
            ):(
            <div className={styles.container}>
                <p>{name}</p>
                <button onClick={editToggle}>edit</button>
                <div className={styles.assignments}>
                    {(assignments.length > 0) ? (
                        assignments.map((a, i) => {
                            return <div key={i}>
                                <p>Assignment Name</p>
                                <input type="text" value={a[0]} onChange={changeAssName(i)} onFocus={(e) => {e.target.select()}}/>
                                <p>Grade</p>
                                <input type="number" value={a[1]} onChange={changeAssGrade(i)} onFocus={(e) => {e.target.select()}}/>
                            </div>
                        })):null}
                    <button onClick={addAssignment} className={styles.button}>add assignment</button>
                </div>
            </div>
            )}
        </div>
    );
}