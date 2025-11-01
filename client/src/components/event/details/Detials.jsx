import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as eventService from "../../../services/eventsServices";

export default function EventDetails() {
    const [event, setEvent] = useState({});
    const { eventId } = useParams();

    useEffect(() => {
        eventService.getOne(eventId)
            .then(setEvent)
    }, [eventId])

    return (
        <section id="event-details">
            <h1>More about this event</h1>
            <div className="info-section">

                <div className="event-header">
                    <img className="event-img" src={event.imageUrl} alt={event.title} />
                    <h1>{event.title}</h1>
                    <p className="type">Type: {event.type}</p>
                    <span className="location">Location: {event.location}</span>                    
                </div>

                <p className="text">
                    {event.summary}
                </p>
            </div>
                {/* <!-- Bonus ( for Guests and Users ) -->
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p className="no-comment">No comments.</p>
                </div>

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article> */}

        </section>
    )
}