import { Link } from 'react-router-dom';

function MatchedItem(props) {
    let { id, img, synopsis, title, nfid } = props.props;

    return (
    <Link to={`/matches/${nfid}`}> 
          <div className="matches--movie">
            <img src={img} className="image-poster" alt=""/>
            <div className="matches--div">
                 <h3 className="matches--title">{title}</h3> 
                <p className="matches--synopsis">{synopsis}</p>
            </div>
        </div>
    </Link>
    )
}

export default MatchedItem;