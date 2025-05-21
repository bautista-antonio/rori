import Image from "next/image";
import Link from "next/link";

import ActionBar from "@/components/ActionBar/ActionBar";
import Title from "@/components/typographic/Title/Title";
import LoginForm from "@/components/LoginForm/LoginForm";
import Button from "@/components/Button/Button";

import googleIconUrl from "@/icons/social/google-logo.svg?url";
import appleIconUrl from "@/icons/social/apple-logo-white.svg?url";

const Login = () => {
  return (
    <div>
      <ActionBar showSettings={false} />
      {/* Content */}
      <main className="flex flex-col items-center gap-8">
        <Title>Sign in</Title>
        <LoginForm />
        {/* Social sign in buttons */}
        <div className="flex flex-col items-center gap-8 max-w-3xs  w-full">
          <p className="text-sm">Or</p>
          <div className="flex flex-col gap-4 w-full">
            <Button
              fullWidth={true}
              icon={<Image src={googleIconUrl} alt="" width={16} height={16} />}
              iconPosition="left"
              text="Sign in with Google"
              type="button"
              variant="social"
            />
            <Button
              fullWidth={true}
              icon={<Image src={appleIconUrl} alt="" width={16} height={16} />}
              iconPosition="left"
              text="Sign in with Apple"
              type="button"
              variant="social"
            />
          </div>
          <p className="font-medium text-base text-center text-earthy-brown">
            Don't have an account?{" "}
            <Link href="/registration" className="underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
