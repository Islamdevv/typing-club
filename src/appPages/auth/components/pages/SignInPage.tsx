import { SubmitHandler, useForm } from "react-hook-form";
import { useSignInMutation } from "../../../../redux/api/auth";
import { useNavigate } from "react-router-dom";
import scss from './SignIn.module.scss'

interface IFormAuthSignIn {
  email: string;
  password: string;
}

const SignInPage = () => {
  const navigate = useNavigate();
  const [signIn] = useSignInMutation();
  const { register, handleSubmit } = useForm<IFormAuthSignIn>();
  const onSubmit: SubmitHandler<IFormAuthSignIn> = async (data) => {
    try {
      const response = await signIn(data).unwrap();
      console.log("Succesfully signed in:", response);
      navigate("/");
      localStorage.setItem(
        "authTokens",
        JSON.stringify({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className={scss.in_h1}>Sign In</h1>
          <div className={scss.main_in_inputs}>
            <input
              type="text"
              placeholder="Print your Email"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="Print your Password"
              {...register("password", { required: true })}
            />
            <button>Sign in</button>
            <p>Forgot password?</p>
            <p onClick={() => navigate('/')}>Назад</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
