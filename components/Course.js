import styles from "../styles/Course.module.css";
import Category from "../components/Category";
import React, { useState } from "react";

let nextID = 0;

export default function Course(props){
    //#region --states--
    const [editMode, setEditMode] = useState(true);
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState(props.name);
    const [breakpoints, setBreakpoints] = useState([]);//TODO: change breakpoints to key:val pairs
    //#endregion

    //#region --functions--
    function addCategory(){
        setCategories([...categories,<Category key={nextID++} name="New Category"/>])
    }
    function editToggle(){
        setEditMode(!editMode);
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    //#endregion

    //#region --main--
    return(
        <div>
            {editMode ? ( //comp in edit mode
            <div className={styles.container}>
                <div className={styles.nameIn}>
                    <p>Class Name:</p>
                    <input type="text" value={name} onChange={handleNameChange}/>
                </div>
                <div className={styles.breakpointsIn}>
                    {/* map breakpoints to inputs that update vals */}
                </div>
                <button onClick={editToggle} className={styles.button}>finish editing</button>
            </div>
            ) : ( //comp not in edit mode
            <div className={styles.container}>
                {/* info bar and edit button */}
                <div className={styles.topBar}>
                    <p>{name}</p>
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