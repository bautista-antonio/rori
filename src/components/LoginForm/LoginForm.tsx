import dmMono from "@/fonts/dm-mono";
import Button from "@/components/Button/Button";

const LoginForm = () => {
  return (
    <form className="flex flex-col justify-center gap-8 w-full max-w-3xs text-sm">
      <div className="flex flex-col gap-0.5">
        <label htmlFor="email" className="font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className={`${dmMono.className} border-b-2 border-charcoal py-4 focus:outline-none focus:ring-2 focus:ring-cerulean-blue placeholder:text-medium-gray`}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="border-b-2 border-charcoal py-4 focus:outline-none focus:ring-2 focus:ring-cerulean-blue placeholder:text-medium-gray"
        />
      </div>
      <Button fullWidth={true} text="Sign in" type="button" variant="primary" />
    </form>
  );
};

export default LoginForm;
