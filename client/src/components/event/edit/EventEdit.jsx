import { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import styles from './Edit.module.css';
import * as eventService from "../../../services/eventsServices";
import toTitleCase from "../../../utils/toTitleCase";
import minMaxValues from "../../../lib/minMaxFormValues";


export default function EventEdit() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [event, setEvent] = useState({
        type: '',
        title: '',
        location: '',
        imageUrl: '',
        description: '',
        date: '',
        time: '',
    });

    useEffect(() => {
        eventService.getOne(eventId)
            .then(result => {
                setEvent(result);
            })
    }, [eventId]);

    const editEventSubmitHandler = async(e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        if (values.description.length < minMaxValues.descriptionMinLength) {
            const error = `Description must be at least ${minMaxValues.descriptionMinLength} characters long.`;
            alert(error)
            throw new Error(error);
        }

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

                    <h1 className={styles.editHeadingOne}>Edit Event</h1>

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
                        required
                        minLength={minMaxValues.titleLocationMinLength}
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
                        required
                        minLength={minMaxValues.titleLocationMinLength}
                    />

                    <label className={styles.label} htmlFor="date">When:</label>
                    <div className={styles.dateTimeRow}>
                        
                        <input 
                            className={`${styles.inputText} ${styles.dateInput}`} 
                            type="date" 
                            id="date" 
                            name="date" 
                            value={event.date}
                            onChange={onChange}
                            required
                        />
                        
                        <input 
                            className={`${styles.inputText} ${styles.timeInput}`} 
                            type="time" 
                            id="time" 
                            name="time" 
                            value={event.time}
                            onChange={onChange}
                            required
                        />
                    </div>                    

                    <label className={styles.label} htmlFor="imageUrl">Image:</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        className={styles.inputText}
                        onChange={onChange} 
                        value={event.imageUrl}
                        placeholder="Show us!"
                        alt={event.title}
                    />

                    <label className={styles.label} htmlFor="description">Description:</label>
                    <textarea 
                        name="description" 
                        id="description"
                        className={styles.textarea}
                        onChange={onChange}
                        value={event.description}
                        placeholder="Tell us more about the event..."
                        required    
                        maxLength={minMaxValues.descriptionMaxLength}                                      
                        minLength={minMaxValues.descriptionMinLength}
                    />                       

                    <input className={styles.btnSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
}