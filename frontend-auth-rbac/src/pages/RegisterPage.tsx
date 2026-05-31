import { useForm } from "react-hook-form";
import { registerUser } from "../services/authService";
import type { RegisterRequest } from "../types/auth";
import { Link } from "react-router-dom";
function RegisterPage() {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm<RegisterRequest>();
    const onSubmit = async (data: RegisterRequest) => {
        try{
            const response = await registerUser(data);
            alert(response);reset();
        }catch(error){
            alert("Registration failed");
        }
    };
    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                <h2> Register User</h2>
                <input type="text" placeholder="Enter your name" {...register("name")} style={styles.input}/>
                <input type="email" placeholder="Enter your email" {...register("email")} style={styles.input}/>
                <input type="password" placeholder="Enter your passsword" {...register("password")} style={styles.input}/>
                <select {...register("role")} style={styles.input}>
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                </select>
                <button type="submit" style={styles.button}> Register </button>
                <p> Already have an account?{" "}<Link to="/"> Login</Link></p>
            </form>
        </div>
    )
}

const styles = {

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "15px",
    width: "300px",
    padding: "30px",
    backgroundColor: "white",
    borderRadius: "10px",
  },

  input: {
    padding: "10px",
    fontSize: "16px",
  },

  button: {
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};


export default RegisterPage;