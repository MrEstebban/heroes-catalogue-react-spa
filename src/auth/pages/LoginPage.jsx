import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    // console.log('HandleLogin');
    navigate('/marvel', {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={handleLogin}  
      >
        Login
      </button>
    </div>
  )
}
