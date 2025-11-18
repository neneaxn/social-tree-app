import { Link } from 'react-router-dom';
import Path from '../../../lib/paths';
import pathToUrl from '../../../utils/pathToUrl';

export default function HomeEvents({
    _id,
    title,
    imageUrl,
}) {
    return (
        <div className="event">
            <div className="image-wrap">
                <img src={imageUrl}/>
            </div>
            <h2>{title}</h2>
            <div className="data-buttons">
                <Link to={pathToUrl(Path.EventDetails, { eventId: _id })} className="btn details-btn">More</Link>
            </div>
        </div>
    )
}