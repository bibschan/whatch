import AcceptButton from '../../elements/Buttons/AcceptButton';
import DeclineButton from '../../elements/Buttons/DeclineButton';

function Card(props) {
   const {  poster, title, nfid, synopsis, year} = props.data.[0];
   const { addMovieToArray, removeItemFromArray } = props;
    return(
        <div className="card">
            <div className="card--poster" >
                <img src={poster} alt="Poster"/>
            </div>
            <div className="card--button">
                {/* pop item from array */}
                <DeclineButton removeItemFromArray={removeItemFromArray}/>
                {/* add to accepted array and pop */}
                <AcceptButton addMovieToArray={addMovieToArray} id={nfid}/>  
            </div>
            <div className="card--info">
                <h1 className="title"> {title}</h1>
                <p className="year"> {year}</p>
                <p className="synopsis"> {synopsis} </p>
            </div>
            
        </div>
    );
}

export default Card;