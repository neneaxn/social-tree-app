import { useNavigate, useParams} from "react-router-dom";
import styles from './Edit.module.css';
import * as eventService from "../../../services/eventsServices";
import { useEffect, useState } from "react";
import toTitleCase from "../../../utils/toTitleCase";

export default function EventEdit() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [event, setEvent] = useState({
        type: '',
        title: '',
        location: '',
        imageUrl: '',
        description: '',
    });

    const maxChars = 1000;

    useEffect(() => {
        eventService.getOne(eventId)
            .then(result => {
                setEvent(result);
            })
    }, [eventId]);

    const editEventSubmitHandler = async(e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        const formattedValues = {
            ...values,
            title: toTitleCase(values.title),
        };
        try {
            await eventService.edit(eventId, formattedValues);
            navigate(`/events/${eventId}`);
        } catch (err) {
            console.log(err.message);     
        }
    }

    const onChange = (e) => {
        setEvent(state => ({
            ...state,
            [e.target.name] : e.target.value
        }))
    }

    return(
        <section className={styles.editEvent}>
            <form id="edit" onSubmit={editEventSubmitHandler}>
                <div className={styles.container}>

                    <h1 className={styles.editHeadingOne}>Add Your Event Here</h1>

                    <label className={styles.label} htmlFor="type">Type:</label>
                    <select 
                        onChange={onChange}
                        value={event.type}
                        name="type" 
                        id="type"
                        className={styles.select}
                    >
                        <option value="Business">Business</option>
                        <option value="Leisure">Leisure</option>
                    </select>

                    <label className={styles.label} htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        className={styles.inputText}
                        value={event.title}
                        onChange={onChange} 
                        placeholder="What?"
                    />

                    <label className={styles.label} htmlFor="location">Location:</label>
                    <input 
                        type="text" 
                        id="location" 
                        name="location"
                        className={styles.inputText}
                        value={event.location}
                        onChange={onChange} 
                        placeholder="Where?"
                    />

                    <label className={styles.label} htmlFor="imageUrl">Image:</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        className={styles.inputText}
                        onChange={onChange} 
                        value={event.imageUrl}
                        placeholder="Show us!"
                    />

                    <label className={styles.label} htmlFor="description">Description:</label>
                    <textarea 
                        name="description" 
                        id="description"
                        className={styles.textarea}
                        onChange={onChange}
                        value={event.description}
                        placeholder="Tell us more about the event..."
                        maxLength={maxChars}>
                    </textarea>

                    <input className={styles.btnSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
}