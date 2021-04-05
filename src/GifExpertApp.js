import { useState } from 'react';
import PropTypes from 'prop-types';

import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

export const GifExpertApp = () => {
    //const categories = ['Luke', 'Hans Solo', 'Vader'];
    //const [categories, setCategories] = useState(['Luke', 'Han Solo', 'Vader']);
    const [categories, setCategories] = useState(['Vader']);

    // const handleAdd = () => {
    //     //*setCategories([...categories, 'Nuevo item']);
    //     //*setCategories( cats => [ 'Nuevo item', ...cats]);
    //     setCategories( () => [...categories, 'Nuevo item']);        
    // };

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }   
            </ol>
        </>
    );
};

AddCategory.propTypes = {
     setCategories: PropTypes.func.isRequired,
}