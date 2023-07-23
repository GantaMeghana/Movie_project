export default function Delete(props){
    return (
        <div className="c">
            <button onClick={()=>{props.onDelete()}}>
                <img src="fluent_delete-32-regular.svg"/></button>
        </div>
    )
}
