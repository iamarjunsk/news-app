import React, { useState } from 'react'
import './categoryAdd.css'
function CategoryAdd(props) {
    const [name, setName] = useState('')
    const [api, setApi] = useState('')
    function add_cat(e){
        e.preventDefault()
        props.addCategory({category:name,api:api})
    }
    return (
        <div className='categoryAdd'>
            <h2>Add Category</h2>
            <form onSubmit={add_cat}>
                <input autoFocus={true} type="text" placeholder='Category Name' onChange={e=>setName(e.target.value)} className='formInput' />
                <input type="text" placeholder='API URL' onChange={e=>setApi(e.target.value)} className='formInput'/>
                <div>
                    <button type="submit" className='formBtn'>+ Add</button>
                </div>

            </form>
        </div>
    )
}

export default CategoryAdd
