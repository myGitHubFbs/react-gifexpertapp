//import React, { useState, useEffect } from 'react'
//import PropTypes from 'prop-types'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({category}) => {
    // const [count, setCount] = useState(0);
    
    //const [images, setImages] = useState([]);

    // useEffect( ()=> {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    // }, []);

    // useEffect( ()=> {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category]);

    const {data, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">            
                {/* <h3>{count}</h3>
                <button onClick={() => setCount(count + 1)}></button> */}

                {/* <ol>
                    {
                        // images.map(img => {
                        //     return  <li key={img.id}>{img.title}</li>                        
                        // })
                        
                        // images.map(img => (
                        //     <li key={img.id}>{img.title}</li>                        
                        // ))

                        images.map(({id, title}) => (
                            <li key={id}>{title}</li>                        
                        ))
                }
                </ol> */}

                {
                    // images.map(img => {
                    //     return  <li key={img.id}>{img.title}</li>                        
                    // })
                    
                    // images.map(img => (
                    //     <li key={img.id}>{img.title}</li>                        
                    // ))

                    // images.map(img => (
                    //     <GifGridItem
                    //          key={img.id}
                    //         // img={img}
                    //          {...img} 
                    //     />
                    // ))
                
                    data.map(img => (
                        <GifGridItem
                            key={img.id}
                            // img={img}
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid