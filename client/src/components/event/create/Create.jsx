import { useNavigate } from "react-router-dom";
import styles from './Create.module.css';
import * as eventService from "../../../services/eventsServices";

export default function Create() {
    const navigate = useNavigate();

    const createEventSubmitHandler = async(e) => {
        e.preventDefault();

        const eventData = Object.fromEntries(new FormData(e.currentTarget));
        // eventData['initialGuests'] = 0
        try {
            const result = await eventService.create(eventData);
            console.log(result);
            
            navigate('/events');
        } catch (err) {
            console.log(err.message);     
        }

    }

    return(
        <section className={styles.addEvent}>
            <form id="add" onSubmit={createEventSubmitHandler}>
                <div className={styles.container}>

                    <h1>Add Your Event Here</h1>

                    <label htmlFor="type">Type:</label>
                    <select name="type" id="type">
                        <option value="Business">Business</option>
                        <option value="Leisure">Leisure</option>
                    </select>

                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="What?"/>

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" placeholder="Where?"/>

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Show us!"/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" placeholder="Tell us more about the event..."></textarea>
                    <input className={styles.btnSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
}