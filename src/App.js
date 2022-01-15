
import { useEffect, useState } from 'react';
import './App.css';
import Catagories from './components/Catagories';
import News from './components/News';
import axios from 'axios';
function App() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    newsLoad({api:'https://newsapi.org/v2/top-headlines?category=technology',name:'TechCrunch'})
  }, [])

  async function newsLoad(n){

    let cat = document.querySelectorAll('.category')
    console.log(cat);
    cat.forEach(element => {
      if(element.innerText == n.name){
        element.classList.add('active')
      }else{
        element.classList.remove('active')
      }
    });

    setSearchText('')
    await axios.get(n.api+'&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d')
    .then(res=>{
      setNews(res.data.articles);
    })
  }
  async function newsSearch(e){
    e.preventDefault()
    setSearchText(search)
    setSearch('')
    await axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=a5cf886a8dd84801a01c8b5bd0da1b0d`)
    .then(res=>{
      setNews(res.data.articles);
    })
  }
  return (
    <div className="App">
      <div className="container">
        <div>
          <h1>News Today</h1>
        </div>

        {/* categories */}
        {/* <Catagories categories={categories} /> */}
        <Catagories loadNews={n=>newsLoad(n)} />

        {/* category add section */}
        
        

        {/* search box */}
        <div className="searchbox-container shadow">
        
          <div>
            🔍
          </div>
          <form onSubmit={newsSearch}>
            <input className='search' value={search} type="search" onChange={e=>{setSearch(e.target.value)}} placeholder='Search for keywords, author ' />
          </form>          
        </div>
        
        {searchText?<h3>Result of :{searchText}</h3>:''}
        

        {/* news section */}
        <News news={news}/>
      </div>
    </div>
  );
}

export default App;
