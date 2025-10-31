import { useNavigate } from "react-router-dom";
import styles from './Create.module.css';

export default function Create() {
    const navigate = useNavigate();

    const createHandler = async (e) => {
        e.preventDefault();

        const eventData = Object.fromEntries(new FormData(e.currentTarget));

        // try {
        //     await gameService.create(eventData);
        //     document.getElementById('add').reset();
        //     navigate('/events');
        // } catch(err) {
        //     //Error notification
        //     console.log(err);
        // };
    }
    return(
        <section className={styles.addEvent}>
            <form id="add" onSubmit={createHandler}>
                <div className={styles.container}>

                    <h1>Add Your Event Here</h1>

                    <label htmlFor="category">Type:</label>
                    {/* <input type="text" id="category" name="category" placeholder="Enter game category..."/> */}
                    <select name="type" id="type">
                        <option value="business">Business</option>
                        <option value="social">Leisure</option>
                    </select>

                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="What?"/>

                    <label htmlFor="leg-title">Location:</label>
                    <input type="text" id="location" name="location" placeholder="Where?"/>

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Show us!"/>

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" placeholder="Tell us more about the event..."></textarea>
                    <input className={styles.btnSubmit} type="submit" value="Submit"/>
                </div>
            </form>
        </section>
    );
}