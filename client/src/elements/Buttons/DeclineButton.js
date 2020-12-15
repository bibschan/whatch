import './../../scss/App.css';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function DeclineButton(props) {
    const { removeItemFromArray } = props;
    return(
        // need to work on "deleting" the movie
        <div className="accept-button" onClick={ () => removeItemFromArray()}>
            {/* <ThumbDownIcon fontSize="4em" color="error"/> */}
            <input type="image" src="assets/—Pngtree—3d red delete icon_5142994.png" alt="decline"/>
        </div>
    )
}

export default DeclineButton;