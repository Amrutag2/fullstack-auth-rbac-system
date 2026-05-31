import { useNavigate } from "react-router-dom";

function DashboardPage() {
const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
    return (
        <div style={styles.container}>
            <h1>Dashboard</h1>
            <h2>Logged in as: {role}</h2>
            {role === "USER" && (
                <div style={styles.card}>
                    <h3>User Content</h3>
                    <p>This content is accessible to USER.</p>
                </div>
            )}
            {role === "ADMIN" && (
                <div style={styles.card}>
                    <h3>Admin Content</h3>
                    <p>This content is accessible to Admin.</p>
                </div>
            )}
            <button onClick={logout} style={styles.button}>Logout</button>
        </div>    
    )
}
const styles = {

  container: {
    padding: "40px",
  },

  card: {
    marginTop: "20px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
  },

  button: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  },
};

export default DashboardPage;