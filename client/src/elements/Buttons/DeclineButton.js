import './../../scss/App.css';

function DeclineButton(props) {
    const { removeItemFromArray } = props;
    return(
        // need to work on "deleting" the movie
        <div className="accept-button" onClick={ () => removeItemFromArray()}>
            <input type="image" src="assets/—Pngtree—3d red delete icon_5142994.png" alt="decline"/>
        </div>
    )
}

export default DeclineButton;