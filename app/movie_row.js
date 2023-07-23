import Button_row from './button_row';
import Delete from './delete.js';
const Movie_row=(props)=>{
    return(
        <div className="row_movie">
            <div className="image_container">
                <img src={props.image}/>
            </div>

            <div className="detail_container">
                <h1 style={{color: "white"}}>{props.Name}</h1>
                <p style={{color: "white"}}>{props.year} | {props.duration} | {props.gener} </p>
                <h2 style={{color: "white"}}>Description</h2>
                <p style={{color: "white"}}>{props.Description}</p>
                <div className="A">
                    <Button_row/>
                    <Delete
                        {...props}
                    />
                </div>
            </div>
        </div>
    );
}
export default Movie_row;
