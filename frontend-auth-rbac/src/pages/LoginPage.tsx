import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type {LoginRequest,LoginResponse} from '../types/auth'
import { loginUser } from "../services/authService";
import { Link } from "react-router-dom";
function LoginPage() {
    const navigate = useNavigate();
    const {
        register,handleSubmit,reset
    } = useForm<LoginRequest>();
    const onSubmit = async (data:LoginRequest) =>{
        try{
            const response: LoginResponse = await loginUser(data);
            localStorage.setItem("token",response.token);
            localStorage.setItem("role",response.role);
            alert("Login successful");
            reset();
            navigate("/dashboard");
        }catch(error){
            alert("Invalid Credentials");
        }
    };
    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
                <h2> Login </h2>
                <input type="email" placeholder="Enter your email" {...register("email")} style={styles.input}/>
                <input type="password" placeholder="Enter your passsword" {...register("password")} style={styles.input}/>
                <button type="submit" style={styles.button}> Login </button>
                <p>Don't have an account?{" "}<Link to="/register">Register</Link></p>
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

export default LoginPage;