import styles from "../styles/Course.module.css";
import Category from "../components/Category.js";
import React, { useState } from "react";

let nextCatID = 0;
let lockArr = [];
let lostArr = [];

export default function Course(props){
    //#region --states--
    const [editMode, setEditMode] = useState(true);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("New class");
    const [breakpoints, setBreakpoints] = useState([["D",60],["C",70],["B",80],["A",90]]);
    const [pointsLocked, setPointsLocked] = useState(0);
    const [pointsLost, setPointsLost] = useState(0);
    //#endregion

    //#region --functions--
    function addCategory(){
        setCategories([...categories,<Category key={nextCatID++} id={nextCatID} updateLocked={updateLocked} updateLost={updateLost}/>])
    }
    function editToggle(){
        if (editMode){
            setBreakpoints([...breakpoints].sort(function(x,y){return (x[1]-y[1])}));
        }
        setEditMode(!editMode);
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    const changeBpName = (index) => (event) =>{
        setBreakpoints(breakpoints.map((b,i) => {return (i == index)? [event.target.value,b[1]]:b}));

    }
    const changeBpNum = (index) => (event) =>{
        setBreakpoints(breakpoints.map((b,i) => {return (i == index)? [b[0],event.target.value]:b}));
    }
    function addBreakpoint(){
        setBreakpoints([...breakpoints,["new",0]]);
    }
    function letter(grd){
        var l = "F";
        for (const bp of breakpoints){
            if(grd>bp[1]){l = bp[0]}
        }
        return l;
    }
    const updateLocked = (val,index) =>{
        lockArr[index] = val;
        setPointsLocked(lockArr.reduce((acc, cur) => {return acc+cur},0))
    }
    const updateLost = (val,index) =>{
        lostArr[index] = val;
        setPointsLost(lostArr.reduce((acc, cur) => {return acc+cur},0));
    }
    //#endregion

    //#region --main--
    return(
        <div>
            {editMode ? ( //comp in edit mode
            <div className={styles.container}>
                <div className={styles.nameIn}>
                    <p>Class Name:</p>
                    <input type="text" value={name} onChange={handleNameChange} onFocus={(e) => {e.target.select()}}/>
                </div>
                <div className={styles.breakpointsIn}>
                    <p>Grade breakpoints</p>
                    <div className={styles.labels}><p>Letter Grade</p><p>Minimum Percentage</p></div>
                    {(breakpoints.length > 0) ? (
                        breakpoints.map((bp, i) => {
                            return <div key={i}>
                                <input type="text" value={bp[0]} onChange={changeBpName(i)} onFocus={(e) => {e.target.select()}}/>
                                <input type="number" value={bp[1]} onChange={changeBpNum(i)} onFocus={(e) => {e.target.select()}}/>
                            </div>
                        })):null}
                    <button onClick={addBreakpoint} className={styles.button}>add breakpoint</button>
                </div>
                <button onClick={editToggle} className={styles.button}>finish editing</button>
            </div>
            ) : ( //comp not in edit mode
            <div className={styles.container}>
                {/* info bar and edit button */}
                <div className={styles.topBar}>
                    <h1>{name}</h1>
                    <h2>Currently achieved grade: {pointsLocked.toFixed(2)}% ({letter(pointsLocked)})</h2>
                    <h2>Highest possible grade: {(100-pointsLost).toFixed(2)}% ({letter(100-pointsLost)})</h2>
                    <button onClick={editToggle} className={styles.button}>edit</button>
                </div>

                {/* categories and add category button */}
                <div className={styles.categoriesBox}>
                    {categories}
                    <button onClick={addCategory} className={styles.button}>add category</button>
                </div>
                
            </div>
            )}
        </div>
    );
    //#endregion
}