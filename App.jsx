import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  const students = [
    { name: "Rahul", marks: 85 },
    { name: "Aina", marks: 35 },
    { name: "John", marks: 60 }
  ];

  const getGrade = (marks) => {
    if (marks >= 80) return "A";
    if (marks >= 60) return "B";
    if (marks >= 40) return "C";
    return "F";
  };

  const container = {
    minHeight: "100vh",
    background: "#f4f6f9",
    fontFamily: "Arial",
    padding: "30px",
    textAlign: "center"
  };

  const table = {
    margin: "auto",
    borderCollapse: "collapse",
    width: "80%",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  };

  const thtd = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "center"
  };

  const button = {
    padding: "10px 16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    marginTop: "20px"
  };

  return (
    <div style={container}>

      {/* HOME */}
      {page === "home" && (
        <>
          <h1>🎓 Student Report System</h1>
          <button style={button} onClick={() => setPage("students")}>
            View Student Table
          </button>
        </>
      )}

      {/* TABLE PAGE */}
      {page === "students" && (
        <>
          <h2>📋 Student Marks Table</h2>

          <table style={table}>
            <thead>
              <tr>
                <th style={thtd}>Name</th>
                <th style={thtd}>Marks</th>
                <th style={thtd}>Grade</th>
                <th style={thtd}>Status</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={thtd}>{student.name}</td>
                  <td style={thtd}>{student.marks}</td>
                  <td style={thtd}>{getGrade(student.marks)}</td>
                  <td style={thtd}>
                    {student.marks >= 40 ? (
                      <span style={{ color: "green", fontWeight: "bold" }}>PASS</span>
                    ) : (
                      <span style={{ color: "red", fontWeight: "bold" }}>FAIL</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button style={button} onClick={() => setPage("home")}>
            ⬅ Back
          </button>
        </>
      )}

    </div>
  );
}

export default App;