import "./Item.css"
import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

export default function Item(props){
    const {data, deleteTask, editTask} = props
    return(
        <div className="list-item">
            <p className="title ">ID {data.id} | {data.title}</p>
            <div className="btn-container">
                <button className="btn btn-delete" onClick={()=>deleteTask(data.id)}><BsFillTrashFill/> Delete</button>
                <button className="btn btn-edit" onClick={()=>editTask(data.id)}><AiFillEdit/> Edit</button>
            </div>
        </div>
    )
}