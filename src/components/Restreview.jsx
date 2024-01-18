import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Restreview() {
    const { id } = useParams();
    const allRestaurant = useSelector(state => state.restaurantSlice.allRestaurant);
    const selectedRestaurant = allRestaurant?.filter(item => item.id == id);
    const reviews = selectedRestaurant[0].reviews;
    console.log("reviews");
    console.log(reviews);

    const [open, setOpen] = useState(false);

    return (
        <>
            <button className='btn btn-warning ms-3' onClick={() => setOpen(!open)}>Click here to see Reviews</button>
            <Collapse in={open}>
                <div className='my-2'>
                    <hr />
                    {
                        reviews?.length > 0 ?
                            reviews.map((item) => (

                                <div className='mt-5'>
                                    <h6>Name: <span className='ms-3 text-warning'>{item.name}</span></h6>
                                    <h6>Date: <span className='ms-3 text-warning'>{item.date}</span></h6>
                                    <h6>Rating: <span className='ms-3 text-warning'>{item.rating}</span></h6>
                                    <p>Description: <span className='ms-3 text-warning'>{item.comments}</span></p>
                                </div>

                            )) :
                            <p>No items to display</p>
                    }
                </div>
            </Collapse>
        </>
    )
}

export default Restreview