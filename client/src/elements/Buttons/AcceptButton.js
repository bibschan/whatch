import './../../scss/App.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

function AcceptButton(props) {
    const { addMovieToArray, id } = props;
    
    return(
        <div className="accept-button" onClick={ () =>  addMovieToArray(id)}>
                {/* <ThumbUpIcon fontSize="3em" color="secondary"/> */}
            <input type="image" src="assets/—Pngtree—3d green check icon_5142993.png" alt="accept"/>
        </div>
    )
}

export default AcceptButton;