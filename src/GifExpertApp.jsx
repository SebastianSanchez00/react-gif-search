import React, { useState } from 'react'
import { AddCategorie,GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'castle']);

    const onAddCategories = (newCategoty) => {
        if (categories.includes(newCategoty)) return
        setCategories([newCategoty, ...categories]);
    }


    return (
        <>
            <div className='title-zone'>
                <h1>GifExpertApp</h1>
            </div>

            <div className="input-content">
                <AddCategorie onNewCategory={(value) => onAddCategories(value)} />
            </div>
               
               
                {
                    categories.map( (category) =>(
                        <GifGrid key={category} category={category}/>
                    )
                       
                    )
                }
               
          
              

           
        </>


    )
}
