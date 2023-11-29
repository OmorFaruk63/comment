import Comment from "./Comment";

import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [comments, setComments] = useState([]);
  let formObj = {};
  function handleSubmit(event) {
    event.preventDefault();
    const elements = [...event.target.elements];
    elements.forEach((element) => {
      formObj[element.name] = element.value;
      element.value = "";
    });
    setComments([...comments, formObj]);
  }

  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input required name="name" type="text" placeholder="Your Name" />
          <input required name="email" type="email" placeholder="Your Email" />
          <textarea maxLength="100" name="comment" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="comment-Container">
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Form;
