import { useState } from "react";
import styles from '../search/Search.module.css';
import * as eventService from '../../services/eventsServices';
import EventItem from "../event/all-events/single-event/EventItem";
import Loading from "../loading/Loading";
import useForm from "../../hooks/useForm";


export default function Search() {
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const SearchKeys = {
        Search: 'search',
    };

    const searchHandler = async (values) => {
        const query = values[SearchKeys.Search];
        const trimmedQuery = query.trim();
        
        if (!trimmedQuery) {
            setSearchResults([]);
            setHasSearched(false);

            alert("Please type a search term (e.g., event title or location) to find events.");
            return;
        }

        setIsLoading(true);
        try {
            const result = await eventService.search(query);
            setSearchResults(result);
            setHasSearched(true);
        } catch (err) {
            console.error(`Search error: ${err.message}`);
            setSearchResults([]); // Clear results on error
            setHasSearched(true);
        } finally {
            setIsLoading(false);
        }
    };

    const { values, onChange, onSubmit } = useForm(searchHandler, {
        [SearchKeys.Search]: '',
    });

    const displayContent = () => {
        if (isLoading) {
            return <Loading />;
        }

        if (hasSearched && searchResults.length === 0) {
            return (
                <p className={styles.noEvents}>
                    No events found matching your search term.
                </p>
            );
        }

        return (
            searchResults.map(event => (
                <EventItem key={event._id} {...event} />
            ))
        );
    };

    return(
        <div className={styles.searchEvents}> 
            <h1 className={styles.eventsHeadingOne}>Search Events</h1> 
            
            <form onSubmit={onSubmit} className={styles.searchForm}>
                <input
                    type="text"
                    name={SearchKeys.Search}
                    placeholder="Search by title or location..."
                    value={values[SearchKeys.Search]}
                    onChange={onChange}
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton} disabled={isLoading}>
                    Search
                </button>
            </form>
            
            <div className={styles.eventsGridWrapper}> 
                {displayContent()}
            </div>
        </div>
    );
}