import React from "react"
import List from "./List"
const ListContainer =()=> {
    
    let listInput = React.createRef()
    let [listData, updateList] = React.useState([])

    let addTask=()=>{
        let newInput=listInput.current.value
        if(newInput === ""){
            return 
        }
        updateList(prev=>{
            return [...prev, newInput]
        })
        listInput.current.value="";
        listInput.current.focus();
    }

    let handleEnterKey=(elt)=>{
        if(elt.key==="Enter"){
            addTask();
        }
    }

    return (
        <div>
            <div className="input">
                <input type="text" ref={listInput} onKeyDown={handleEnterKey} />
                <button onClick={addTask}>Add</button>
            </div>
            <div className="list">
                {listData.map((e, index) => (
                    <List text={e} key={index}/>
                ))}
            </div>
            <div className="last">
                <button
                    onClick={() => {
                        listInput.current.focus();
                    }}
                >
                    Go back writing.
                </button>
            </div>
        </div>
    );
}

export default ListContainer