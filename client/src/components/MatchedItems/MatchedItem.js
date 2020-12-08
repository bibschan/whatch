function MatchedItem(props) {
    let {id, image1, matlabel, released, runtime, synopsis, title } = props.props;

    return (
        <div className="matches--movie">
            <img src={image1} className="image-poster"/>
            <div className="matches--div">
                <h3 key={id} className="matches--title">{title}</h3> 
                <p key={id} className="matches--synopsis">{synopsis}</p>
            </div>
        </div>
    )
}

export default MatchedItem;