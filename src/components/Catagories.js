import React, { useState } from 'react'
import CategoryAdd from './CategoryAdd';
function Catagories(props) {
    const [categories, setCategories] = useState([{category:"TechCrunch",api:"https://newsapi.org/v2/top-headlines?category=technology"}])
    const [addCatTog, setAddCatTog] = useState(false)
    // console.log(props.categories);
    if(addCatTog){
      // console.log(document.querySelector('.App'));
      document.querySelector('.App').disabled=true
    }
    function addCat(category){
      if(category.category && category.api){
        setCategories([...categories,category])

      }
      setAddCatTog(false)
    }
    return (
        <>
          <div className="catagories">
              {
                categories.map(c =>{
                  return(
                    <button onClick={()=>{props.loadNews({api:c.api,name:c.category})}} key={c.category} className="category" >
                      <b>{c.category}</b>
                    </button>
                  )
                })
              }
              {
                categories.length < 5?
                <button onClick={()=>setAddCatTog(!addCatTog)} className="category non-active button"><b>+</b></button>
                :
                ''
              }
          </div>

          {/* category add section */}
          {
            // addCatTog?<CategoryAdd addCategory = {category =>setCategories([...categories,category])}/>:""
            addCatTog?<CategoryAdd addCategory = {category =>addCat(category)}/>:""
          }
          {
            addCatTog? <div id="overlay" onClick={addCat}></div>:''
          }
         
        </>
    )
}

export default Catagories
