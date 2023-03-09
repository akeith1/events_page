import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const AllEvents = ({data}) => {
    return (
        <div className='events_page'>
                {data.map((ev) => (
                    <Link key={ev.id} href={`/events/${ev.id}`} passHref>
                        <div className='card'>
                        <Image width={500} height={500} alt={ev.title} src={ev.image} />
                        <h2>{ev.title}</h2>
                        </div>
                    </Link>
                ))}
        </div>
    )
}

export default AllEvents