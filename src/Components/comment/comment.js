import React from 'react'
import "./comment.css"
import image from "../../images/image.jpg";
import { FaAngleLeft} from 'react-icons/fa';
import { FaAngleRight} from 'react-icons/fa';
/**
* @author
* @function Comment

**/

const Comment
 = (props) => {
  return(
    <div className="comment_header">
     <nav className="nav_box nav_link">
         <div className="nav1 nav_pad">
         <a href="">
             <span className="nav-label">
                 <i className="icon1"></i>
                 <span><FaAngleLeft/>Previous Article</span>
             </span>
             <span className="nav_img h4">
                 <img style={{width:50,height:50}} src={image} className="img1"/>
                 <span className="tittle">What Does It Take for a Fresher to Get an IT Job?</span>
             </span>
         </a>
         </div>

          <div className="nav2 nav_pad">
         <a href="">
             <span className="nav-label">
                 <i className="icon2"></i>
                 <span>Next Article<FaAngleRight/></span>
             </span>
             <span className="nav_img h4">
                 <img style={{width:50,height:50 }} src={image} className="img2" />
                 <span className="tittle">What Does It Take for a Fresher to Get an IT Job?</span>
             </span>
         </a>
         </div> 
     </nav>
     <aside className="comment_box">
         <div className="comment_box_header clearfix">
             <h4 className="reply">
                 <i className="reply_icon"></i>
                 Leave a reply
             </h4>
         </div>
         <div className="comment-box-content">
             <div id="comments" className="comment_area">
              <div>
                  <form className="comment-form">
                      <p className="comment_notes">
                          <span id="e-notes">Your email address will not be published.</span>
                           <t />Required fields are mark
                          <span className="required">*</span>
                      </p>
                      <p className="form-comment">
                          <label for="comment"></label>
                          <textarea placeholder="Leave Your Comment"
                          required="required" className="user_comment">

                          </textarea>
                      </p>
                    <div className="user_input">
                      <p className="form-author">
                          <label for="name"></label>
                          <textarea placeholder="Name"
                          required="required">

                          </textarea>
                      </p>
                     
                <p className="form-email">
                          <label for="email"></label>
                          <textarea placeholder="Email"
                          required="required" style={{marginRight:6}}>

                          </textarea>
                      </p>
                      
                    <p className="form-website">
                          <label for="Website"></label>
                          <textarea placeholder="Website"
                          required="required" style={{marginRight:0}}>

                          </textarea>
                      </p></div>
                      <p className="form-comment-cookies">
                       <input type="checkbox" className="checkbox"/>
                       <label for="comment-cookies">Save my name, email, and website in this browser for the next time I comment.</label>
                     </p>
                     <p className="submit">
                       <input type="submit" className="submit_input" value="Post Comment"/>
                       
                     </p>
                    
                 </form>
                 </div>   
             </div>
         </div>
     </aside>
    </div>
   )

 }

export default Comment;
