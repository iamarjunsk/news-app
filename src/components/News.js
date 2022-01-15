import React from 'react'
import './news.css'
function News(props) {
    console.log(props);
    function timecalc(t){
        let date = t.replace('T',' ').slice(0,-10)
        let time24 = t.slice(-9).slice(0,-1)
        let hr = parseInt(time24.slice(0,2))
        let timeSec = (hr/12)>=1?'PM':'AM'
        let h = hr % 12
        let time12 = h.toString()+time24.slice(-6) + ' ' + timeSec
        let time = date+' '+time12
        return time
    }
    return (
        <div>
            {
                props.news.map(n=>{
                    return(
                        <a className='news shadow' key={n.title} href={n.url} target="_blank">
                            <div className='text-sec'>
                                <div className='n-head'>
                                    <b>{n.title}</b>
                                </div>
                                <div className='n-meta'>
                                    <p className="author"><b>{n.author?n.author:"Not found"}</b></p>
                                    <p className='dot'><b>.</b></p>
                                    <p className="date"><b>{timecalc(n.publishedAt)}</b></p>
                                </div>
                                <div className='n-body'>
                                    {n.description}
                                </div>
                            </div>
                            <div className='pic-sec'>
                                <img src={n.urlToImage?n.urlToImage:'https://wellesleysocietyofartists.org/wp-content/uploads/2015/11/image-not-found.jpg'} alt="Image loading error" />
                            </div>
                        </a>
                    )
                })
            }
            
        </div>
    )
}

export default News
