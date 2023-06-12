import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../../../bistro-boss-client/src/Shared/SocialLogin/SocialLogin";
import gif from "../../assets/login.gif";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };


  const handleGoogleSignIn = () => {
    googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
            fetch(' https://kraftcamp-server.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            })
                .then(res => res.json())
                .then(() => {
                    navigate(from, { replace: true });
                })
        })
}


  return (
    <>
      <Helmet>
        <title>KraftCamp | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/4 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
            <img className="mb-3" src={gif} alt="GIF" />
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card md:w-3/4 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center p-4">
              <small>
                New Here?{" "}
                <Link to="/signup">
                  <u>Create an account</u>
                </Link>{" "}
              </small>
            </p>
            <div className="divider">OR</div>
            <div className="text-center">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-circle btn-outline"
              >
                G
              </button>
            </div>
            {/* <SocialLogin></SocialLogin> */}
            <p className="text-warning p-4 text-center">{error}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
