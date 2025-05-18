import Link from "next/link";
import ActionBar from "@/components/ActionBar/ActionBar";
import Title from "@/components/typographic/Title/Title";

const Login = () => {
  return (
    <>
      <ActionBar showSettings={false} />
      <div className="px-4 flex flex-col items-center h-screen gap-8">
        <Title>Sign in</Title>
        <LoginForm />
        <div className="flex flex-col items-center gap-12">
          <p className="text-base">Or</p>
          <div className="flex flex-col gap-4">
            <SocialLoginButton
              provider="google"
              text="Sign in with Google"
              icon="/public/icons/google.svg"
            />
            <SocialLoginButton
              provider="apple"
              text="Sign in with Apple"
              icon="/public/icons/apple.svg"
            />
          </div>
          <p>
            Don't have an account? <Link className="underline">Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
