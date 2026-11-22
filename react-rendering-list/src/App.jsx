function App() {
  const students = [
    {
      id: 1,
      name: "Himaja",
      age: 20,
      gender: "Female",
      grade: "A"
    },
    {
      id: 2,
      name: "Srija",
      age: 19,
      gender: "female",
      grade: "S"
    },
    {
      id: 3,
      name: "Srinu",
      age: 20,
      gender: "male",
      grade: "B"
    }
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>React Rendering List</h2>

      <table
        border="1"
        cellPadding="15"
        style={{
          margin: "auto",
          borderCollapse: "collapse",
          width: "80%"
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;