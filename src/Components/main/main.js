import React from 'react'
import "./main.css"
import image from "../../images/image.jpg";
/**
* @author
* @function 
**/

const Main = (props) => {
  return(
    <div className="ll"> 
    <div className=" l container">
     <div className="main_container">
      <div className="content">
          <header className="header1 header2">
           <aside className="cat_position cat_info">
             <a class="catagory" href="">Data structure</a>
         </aside>
         <h1 className="article_heading">Recursion in Data Structure: How Does it Work, Types &amp; When Used | Coding Ninjas Blog</h1>
        <div className="date">
            <span>
                12 May 2020
            </span>
        </div>
        <div className="k">
            <div className="l">
                <img  src={image}></img>
            </div>
        <span class=" image_caption overlay">Code gives you wings</span>
        </div>
        </header>
     </div>
     </div>
     <div className="recent_container">
     <div className="sidebar">
     <div className="op search search_box">
         <form className="search_form">
             <label>
                 <span></span>
                     <input type="Search" placeholder="Search" className="search_input"></input>
                 
             </label>
             {/* <input type="submit" className="search_icon"></input> */}
         </form >
     </div>
     <div className="widget">
         <h2 className="recent_widget recent_post">Recents Post</h2>
         <ul>
             <li>
                 <a id="link">Facebook Interview Questions for Off-Campus Placement</a>
                 <span className="post-date">Date</span>
             </li>

             <li>
                 <a id="link">Facebook Interview Questions for Off-Campus Placement</a>
                 <span className="post-date">Date</span>
             </li>
             <li>
                 <a id="link">Facebook Interview Questions for Off-Campus Placement</a>
                 <span className="post-date">Date</span>
             </li>
             <li>
                 <a id="link">Facebook Interview Questions for Off-Campus Placement</a>
                 <span className="post-date">Date</span>
             </li>
             <li>
                 <a id="link">Facebook Interview Questions for Off-Campus Placement</a>
                 <span className="post-date">Date</span>
             </li>
             <li>
                 <a id="link">Facebook Interview Questions for Off-Campus Placement</a>
                 <span className="post-date">Date</span>
             </li>
         </ul>
     </div>
     </div>
    </div>
   </div>
   </div>
    )

 }

export default Main;