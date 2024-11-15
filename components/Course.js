import styles from "../styles/Course.module.css";
import Category from "../components/Category.js";
import React, { useState,useEffect } from "react";


export default function Course(props){
    //#region --state variables--
    const [nextCatID,setNextCatID] = useState((props.catID == null)?0:props.catID);
    const [lockArr,setLockArr] = useState([]);
    const [lostArr,setLostArr] = useState([]);
    const [editMode, setEditMode] = useState((props.em == null)? true:props.em);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState((props.nam == null)? "New class":props.nam);
    const [breakpoints, setBreakpoints] = useState((props.bp == null)?[["D",60],["C",70],["B",80],["A",90]]:props.bp);
    const [pointsLocked, setPointsLocked] = useState((props.pLock == null)? 0:props.pLock);
    const [pointsLost, setPointsLost] = useState((props.pLost == null)? 0:props.pLost);
    const [showCats, setShowCats] = useState(true);
    useEffect(()=>{
        if(props.cats != null && categories.length == 0){
            var catsTmp =[];
            for(const cat of Object.keys(props.cats)){
                catsTmp = [...catsTmp,<Category
                key={parseInt(cat)}
                id={parseInt(cat)}
                classID={props.id}
                updateCat={props.updateCat}
                updateLocked={updateLocked}
                updateLost={updateLost}
                nam={props.cats[cat]["nam"]}
                wght={props.cats[cat]["wght"]}
                ass={props.cats[cat]["ass"]}
                em={false}
                />];
                props.addCat(props.id,cat);
            }
            setNextCatID(catsTmp.length);
            setCategories(categories.concat(catsTmp));
        }
    }, []);
    useEffect(()=>{
        props.updateClass(props.id,"nam",name);
        props.updateClass(props.id,"bp",breakpoints);
        props.updateClass(props.id,"pLock",pointsLocked);
        props.updateClass(props.id,"pLost",pointsLost);
    }, [name,breakpoints,pointsLocked,pointsLost]);
    //#endregion

    //#region --functions--
    function addCategory(){
        setCategories([...categories,<Category key={nextCatID} id={nextCatID} classID={props.id} updateCat={props.updateCat} updateLocked={updateLocked} updateLost={updateLost}/>])
        props.addCat(props.id,nextCatID);
        setNextCatID(nextCatID+1);
    }
    const removeCategory = (key) => () =>{
        //TODO: implement deletion
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
    const deleteBp = (index) => () =>{
        setBreakpoints([...breakpoints.slice(0,index),...breakpoints.slice(index+1)]);
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
        var temp = lockArr;
        temp[index] = val;
        setLockArr(temp);
        setPointsLocked(lockArr.reduce((acc, cur) => {return acc+cur},0))
    }
    const updateLost = (val,index) =>{
        var temp = lostArr;
        temp[index] = val;
        setLostArr(temp);
        setPointsLost(lostArr.reduce((acc, cur) => {return acc+cur},0));
    }
    function toggleCats(){
        setShowCats(!showCats);
    }
    //#endregion

    //#region --main--
    return(
        <div>
            <div className={styles.containerWhite} style={{display: editMode ? null : 'none'}}>
                <div className={styles.nameIn}>
                    <p className={styles.label}>Class Name:</p>
                    <input type="text" value={name} onChange={handleNameChange} onFocus={(e) => {e.target.select()}}/>
                </div>
                <div className={styles.breakpointsIn}>
                    <p className={styles.label}>Grade breakpoints:</p>
                    <div className={styles.bpCards}>
                    {(breakpoints.length > 0) ? (
                        breakpoints.map((bp, i) => {
                            return <div key={i} className={styles.bpCard}>
                                <p>Letter Grade</p><button className={styles.deleteButton} onClick={deleteBp(i)} id="scary"><img className={styles.icon} src="/hwk/close.svg"/></button>
                                <input type="text" value={bp[0]} onChange={changeBpName(i)} onFocus={(e) => {e.target.select()}}/>
                                <p>Minimum Percentage</p>
                                <input type="number" value={bp[1]} onChange={changeBpNum(i)} onFocus={(e) => {e.target.select()}}/>
                            </div>
                        })):null}
                        <button onClick={addBreakpoint} className={styles.button}><img className={styles.icon} src="/hwk/add.svg"/></button>
                        </div>                 
                </div>
                <button onClick={editToggle} className={styles.button} id="good"><img className={styles.icon} src="/hwk/check.svg"/></button>
            </div>
            <div className={styles.container} style={{display: editMode ? 'none' : null }}>
                {/* info bar and edit button */}
                <div className={styles.topBar}>
                    <button className={styles.minimize} onClick={toggleCats}><img className={styles.icon} src={showCats ? "/hwk/arrow_up.svg":"/hwk/arrow_down.svg"}/></button>
                    <h1>{name}</h1>
                    <h2>Currently achieved grade: {pointsLocked.toFixed(2)}% ({letter(pointsLocked)})</h2>
                    <h2>Highest possible grade: {(100-pointsLost).toFixed(2)}% ({letter(100-pointsLost)})</h2>
                    <div className={styles.spacer}/>
                    <button onClick={editToggle} className={styles.button}><img className={styles.icon} src="/hwk/gear.svg"/></button>
                    <button onClick={() => props.deleteCourse(props.id)} className={styles.button} id="scary"><img className={styles.icon} src="/hwk/close.svg"/></button>
                </div>

                {/* categories and add category button */}
                <div className={styles.categoriesBox} style={{height: showCats? null : "0px"}}>
                    {categories}
                    <button onClick={addCategory} className={styles.button}><img className={styles.icon} src="/hwk/add.svg"/></button>
                </div>
                
            </div>
        </div>
    );
    //#endregion
}