import SingleEvent from '@/components/events/single-event.jsx';
import myJson from '../../../data/data.json' assert {type: 'json'};


const EventPage = ({data}) => <SingleEvent data = {data}/>;

export default EventPage;

export async function getStaticPaths() {
    const data = myJson;
    const allEvents = data.allEvents;
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id
            },
        };
    });
    return {
        paths: allPaths,
        fallback: false,
        
    }
}

export async function getStaticProps(context){
    const id = context.params.id;
    const {allEvents} = myJson;
    const eventData = allEvents.find((ev) => (id === ev.id));
    return {
        props: {data: eventData},
    }
}