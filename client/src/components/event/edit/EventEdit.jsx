import { useNavigate, useParams} from "react-router-dom";
import styles from './Edit.module.css';
import * as eventService from "../../../services/eventsServices";
import useForm from "../../../hooks/useForm";
import { useEffect, useState } from "react";

export default function EventEdit() {
    const navigate = useNavigate();
    const { eventId } = useParams();
    const [event, setEvent] = useState({
        type: '',
        title: '',
        location: '',
        imageUrl: '',
        summary: '',
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
        try {
            await eventService.edit(eventId, values);
            navigate('/events');
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
        <section className={styles.addEvent}>
            <form id="add" onSubmit={editEventSubmitHandler}>
                <div className={styles.container}>

                    <h1>Add Your Event Here</h1>

                    <label htmlFor="type">Type:</label>
                    <select 
                        onChange={onChange}
                        value={event.type}
                        name="type" 
                        id="type"
                    >
                        <option value="Business">Business</option>
                        <option value="Leisure">Leisure</option>
                    </select>

                    <label htmlFor="title">Title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={event.title}
                        onChange={onChange} 
                        placeholder="What?"
                    />

                    <label htmlFor="location">Location:</label>
                    <input 
                        type="text" 
                        id="location" 
                        name="location"
                        value={event.location}
                        onChange={onChange} 
                        placeholder="Where?"
                    />

                    <label htmlFor="imageUrl">Image:</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        onChange={onChange} 
                        value={event.imageUrl}
                        placeholder="Show us!"
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea 
                        name="summary" 
                        id="summary" 
                        onChange={onChange}
                        value={event.summary}
                        placeholder="Tell us more about the event...">
                    </textarea>

                    <input className={styles.btnSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
}