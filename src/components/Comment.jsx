import "./Comment.css";
const Comment = ({ comment }) => {
  const { name, email, comment: com } = comment;

  return (
    <div className="card">
      <h3>Name: {name}</h3>
      <h3>Email: {email}</h3>
      <div className="comment">
        <h3>Comment: {com}</h3>
      </div>
    </div>
  );
};

export default Comment;
