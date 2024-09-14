import axios from "axios";
import { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setData([...response.data]))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="all-cards">
      {data?.map((card) => (
        <div className="card" key={card.id}>
          <h3>{card.name}</h3>
          <span>{card.email}</span>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  );
}
export default Fetch;
