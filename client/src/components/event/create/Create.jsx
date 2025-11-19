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
            
            navigate('/events');
        } catch (err) {
            console.log(err.message);     
        }

    }

    return(
        <section className={styles.addEvent}>
            <form id="add" onSubmit={createEventSubmitHandler}>
                <div className={styles.container}>

                    <h1 className={styles.createHeadingOne}>Add Your Event Here</h1>

                    <label className={styles.label} htmlFor="type">Type:</label>
                    <select className={styles.select} name="type" id="type">
                        <option className={styles.option} value="Business">Business</option>
                        <option className={styles.option} value="Leisure">Leisure</option>
                    </select>

                    <label className={styles.label} htmlFor="title">Title:</label>
                    <input className={styles.inputText} type="text" id="title" name="title" placeholder="What?"/>

                    <label className={styles.label} htmlFor="location">Location:</label>
                    <input className={styles.inputText} type="text" id="location" name="location" placeholder="Where?"/>

                    <label className={styles.label} htmlFor="imageUrl">Image:</label>
                    <input className={styles.inputText} type="text" id="imageUrl" name="imageUrl" placeholder="Show us!"/>

                    <label className={styles.label} htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" placeholder="Tell us more about the event..." className={styles.textarea}></textarea>
                    <input className={styles.btnSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
}