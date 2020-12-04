import AcceptButton from './../elements/AcceptButton';
import DeclineButton from './../elements/DeclineButton';

function Card(props) {
   const { id, poster, title, synopsis, year} = props.data.[0];
   const { addMovieToArray, removeItemFromArray } = props;
    return(
        <div className="card">
            <div className="card--poster" >
                {/* must work on displaying the buttons overlayed with image */}
                <img src={poster} alt="Poster"/>
            </div>
            <div className="card--button">
                {/* pop item from array */}
                <DeclineButton removeItemFromArray={removeItemFromArray}/>
                {/* add to accepted array and pop */}
                <AcceptButton addMovieToArray={addMovieToArray} id={id}/>  
            </div>
            <div className="card--info">
                <h1 className="title"> {title}</h1>
                <p className="year"> {year}</p>
                <p> {synopsis} </p>
            </div>
            
        </div>
    );
}

export default Card;