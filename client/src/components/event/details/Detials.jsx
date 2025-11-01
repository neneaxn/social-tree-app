import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as eventService from "../../../services/eventsServices";
import styles from '../details/Details.module.css'

export default function EventDetails() {
    const [event, setEvent] = useState({});
    const { eventId } = useParams();

    useEffect(() => {
        eventService.getOne(eventId)
            .then(setEvent)
    }, [eventId])

    return (
        <div className={styles.eventDetails}>
            <div className={styles.infoSection}>

                <div className={styles.eventHeader}>
                    <img className={styles.eventImg} src={event.imageUrl} alt={event.title} />
                    <h1>{event.title}</h1>
                    <span className={styles.type}>Type: {event.type}</span> <br/>
                    <span className={styles.location}>Location: {event.location}</span>                    
                </div>

                <p className={styles.text}>
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

        </div>
    )
}



// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus vel quibusdam excepturi nisi earum quidem aperiam quia quos nemo, facere doloremque laborum ea nobis ut. Doloremque architecto ea natus optio minima sequi voluptas perferendis magnam odio neque necessitatibus, reiciendis repellat, officia magni corporis autem explicabo quis! Quidem excepturi ex nemo.