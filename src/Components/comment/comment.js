import React from 'react'
import "./comment.css"
import image from "../../images/image.jpg";
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
                 <span>Previous Article</span>
             </span>
             <span className="nav_img">
                 <img style={{width:50,height:50}} src={image}/>
                 <span className="tittle">What Does It Take for a Fresher to Get an IT Job?</span>
             </span>
         </a>
         </div>

          {/* <div className="nav2 nav_pad">
         <a href="">
             <span className="nav-label">
                 <i className="icon1"></i>
                 <span>Next Article</span>
             </span>
             <span className="nav_img">
                 <img style={{width:50,height:50,sizes:230}} src={image}/>
                 <span className="tittle">What Does It Take for a Fresher to Get an IT Job?</span>
             </span>
         </a>
         </div>  */}
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
                          <span id="e-notes">Your email address will not be published</span>
                          Required fields are mark
                          <span className="required">*</span>
                      </p>
                      <p className="form-comment">
                          <label for="comment"></label>
                          <textarea placeholder="Leave Your Comment"
                          required="required">

                          </textarea>
                      </p>

                      <p className="form-author">
                          <label for="comment"></label>
                          <textarea placeholder="Name"
                          required="required">

                          </textarea>
                      </p>
                      <p className="form-email">
                          <label for="email"></label>
                          <textarea placeholder="Email"
                          required="required">

                          </textarea>
                      </p>

                      <p className="form-website">
                          <label for="comment"></label>
                          <textarea placeholder="Website"
                          required="required">

                          </textarea>
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
