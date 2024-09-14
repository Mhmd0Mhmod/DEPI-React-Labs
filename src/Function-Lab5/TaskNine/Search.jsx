import React, { useEffect, useState } from "react";

const Search = () => {
  const [postId, setPostId] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!postId) {
      setComments([]);
      return;
    }
    async function fetchData() {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [postId]);
  return (
    <div>
      <input type="text" value={postId} onChange={(e) => setPostId(e.target.value)} placeholder="Enter postId" />
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, idx) => (
            <li key={comment.id}>
              {idx + 1} . {comment.body}
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  );
};

export default Search;
