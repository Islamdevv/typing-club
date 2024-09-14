import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpMutation } from "../../../../redux/api/auth";
import { useNavigate } from "react-router-dom";
import scss from './SignUp.module.scss'

interface IFormAuthSignUp {
  email: string;
  password: string;
  username: string;
  photo: string;
}

const SignUpPage = () => {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IFormAuthSignUp>();
  const onSubmit: SubmitHandler<IFormAuthSignUp> = async (data) => {
    try {
      const response = await signUp(data).unwrap();
      console.log("Succesful:", response);
      navigate("/");
      localStorage.setItem(
        "authTokens",
        JSON.stringify({
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className={scss.up_h1}>Sign Up</h1>
          <div className={scss.main_up_inputs}>
            <input
              type="text"
              placeholder="Print your email"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="Print your password"
              {...register("password", { required: true })}
            />
            <input
              type="text"
              placeholder="Print your username"
              {...register("username", { required: true })}
            />
            <input
              type="text"
              placeholder="Print your photo"
              {...register("photo", { required: true })}
            />
            <button>Sign up</button>
            <p onClick={() => navigate('/')}>Назад</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
