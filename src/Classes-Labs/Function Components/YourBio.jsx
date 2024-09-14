function YourBio({ bio, skills, children }) {
  return (
    <>
      {children}
      <h3>{bio}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  );
}
export default YourBio;
