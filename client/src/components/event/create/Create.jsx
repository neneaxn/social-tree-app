import { useNavigate } from "react-router-dom";
import styles from './Create.module.css';
import * as eventService from "../../../services/eventsServices";
import Path from "../../../lib/paths";
import useForm from "../../../hooks/useForm";

export default function Create() {
    const navigate = useNavigate();

    const initialFormValues = {
        type: 'Business', // default value
        title: '',
        location: '',
        imageUrl: '',
        description: '',
    };

    const createEventSubmitHandler = async (values) => {
        try {
            await eventService.create(values);
            navigate(Path.AllEvents);
        } catch (err) {
            console.log(err.message);
        }
    };

    const { values, onChange, onSubmit } = useForm(createEventSubmitHandler, initialFormValues);

    return(
        <section className={styles.addEvent}>
            <form id="add" onSubmit={onSubmit}>
                <div className={styles.container}>

                    <h1 className={styles.createHeadingOne}>Add Your Event Here</h1>

                    <label className={styles.label} htmlFor="type">Type:</label>
                    <select 
                        className={styles.select} 
                        name="type" 
                        id="type"
                        value={values.type}
                        onChange={onChange}
                    >
                        <option className={styles.option} value="Business">Business</option>
                        <option className={styles.option} value="Leisure">Leisure</option>
                    </select>

                    <label className={styles.label} htmlFor="title">Title:</label>
                    <input 
                        className={styles.inputText} 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="What?"
                        value={values.title}
                        onChange={onChange}
                    />

                    <label className={styles.label} htmlFor="location">Location:</label>
                    <input 
                        className={styles.inputText} 
                        type="text" 
                        id="location" 
                        name="location" 
                        placeholder="Where?"
                        value={values.location}
                        onChange={onChange}
                    />

                    <label className={styles.label} htmlFor="imageUrl">Image:</label>
                    <input 
                        className={styles.inputText} 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        placeholder="Show us!"
                        value={values.imageUrl}
                        onChange={onChange}
                    />

                    <label className={styles.label} htmlFor="description">Description:</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        placeholder="Tell us more about the event..." 
                        className={styles.textarea}
                        value={values.description}
                        onChange={onChange}
                    />
                    <input className={styles.btnSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
}