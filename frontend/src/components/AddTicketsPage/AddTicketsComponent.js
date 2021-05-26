import React, { useState } from 'react';
export default function AddTicketsComponent(){
    const [price, setPrice] = useState(0);
    const [type, setType] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Price:
                </label>
            </div>
            <div>
                <input
                    type='number'
                    value={price}
                    onChange={
                        (e)=>setPrice(e.target.value)
                    }
                    min='0.01'
                    step='0.01'
                    required
                />
            </div>
            <div>
                <label>
                    Type of admission:
                </label>
            </div>
            <div>
                <input
                    type='text'
                    value={type}
                    onChange={
                        (e)=>setType(e.target.value)
                    }
                    placeholder='GA'
                    required
                />
            </div>
            <div>
                <label>
                    Ticket Image:
                </label>
            </div>
            <div>
                <input
                    type='text'
                    value={image}
                    onChange={(e)=>setImage(e.target.value)}
                    placeholder='upload ticket here'
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
