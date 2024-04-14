import React, { useState } from "react";

export const Testimonials = (props) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    
    const newComment = {
      name: "You", 
      text: comment,
      img: "" 
    };
    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2>Mamnun o`quvchilar</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
          {comments.map((c, i) => (
            <div key={`comment-${i}`} className="col-md-4">
              <div className="testimonial">
                <div className="testimonial-content">
                  <p>"{c.text}"</p>
                  <div className="testimonial-meta"> - {c.name} </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                className="form-control"
                rows="3"
                placeholder="Leave your comment here"
                value={comment}
                onChange={handleCommentChange}
              ></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
