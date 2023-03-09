import AllEvents from '@/components/events/events-page';
import myJson from '../../data/data.json' assert {type: 'json'};
const EventsPage = ({data}) => {
    return (
        <AllEvents data={data}/>
    )
};

export default EventsPage;

export async function getStaticProps() {
    const {events_categories} = myJson;
    return {
        props:{
            data: events_categories,
        }
    }
}

