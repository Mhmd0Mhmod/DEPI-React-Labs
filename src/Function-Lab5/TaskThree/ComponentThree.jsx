import { useComponentContext } from "./ComponentContext";

function ComponentThree() {
  const value = useComponentContext();
  return (
    <div className="card">
      <h3>My Name : {value.name}</h3>
      <p>age : {value.age}</p>
      <p>birthday : {value.BD}</p>
      <p>Collage : {value.collage}</p>
      <ul>
        {value.skills?.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
export default ComponentThree;
