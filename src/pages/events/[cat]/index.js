import CatEvent from '@/components/events/catEvent';
import myJson from '../../../data/data.json' assert {type: 'json'};
const EventsCatPage = ({data, pageName}) => 
       <CatEvent data={data} pageName={pageName}/> 


export default EventsCatPage;

export async function getStaticPaths() {
    const {events_categories} = myJson;
    const allPaths = events_categories.map((ev) =>{
        return {
            params: {
                cat: ev.id.toString(),
            },
        }
    })
    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context){
    const id = context?.params.cat;
    console.log(context);
    const {allEvents} = myJson;
    const data = allEvents.filter((ev) => ev.city === id)
    return {
        props: {data, pageName: id},
    }
}