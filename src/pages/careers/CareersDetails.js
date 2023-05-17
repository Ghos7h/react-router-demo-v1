import React from 'react'
import {
    useLoaderData,
    useParams
} from 'react-router-dom'

const CareersDetails = () => {

    const {
        id
    } = useParams();

    const career = useLoaderData();
    return (
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quidem, hic in at beatae libero, ratione pariatur unde, tempore perspiciatis quis velit obcaecati culpa? Est ipsa cum odio nihil tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi necessitatibus, et quisquam velit iste, similique facilis rerum consectetur eligendi voluptas eveniet! Provident quos suscipit ipsum temporibus adipisci vero, quasi est.</p>
            </div>
        </div>
    )
}

export default CareersDetails

export const careerDetailsLoader = async ({params}) => {
    const {id} = params;
    const res = await fetch(`http://localhost:4000/careers/${id}`);
    if(!res.ok) throw Error('Could not find that career');
    return res.json();
}