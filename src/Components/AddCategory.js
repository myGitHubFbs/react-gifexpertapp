import React, { useState } from 'react';

    const AddCategory = ({setCategories}) => {
        const [inputValue, setInputValue] = useState('');
        
        const handleInputText = (e) => {
            // console.log(e.target.value);
            setInputValue(e.target.value);
        };
        
        const handleSubmit = (e) => {
            e.preventDefault();

            if(inputValue.trim().length > 2){
                // console.log('Submit hecho...');
                setCategories( cats => [inputValue, ...cats,]);
                setInputValue('');
            }
        };

        return (
            <form onSubmit={handleSubmit}>
                <h1>{inputValue}</h1>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputText}
                />
            </form>
        );
    };

export default AddCategory