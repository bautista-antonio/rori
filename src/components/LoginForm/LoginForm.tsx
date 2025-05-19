import dmMono from "@/fonts/dm-mono";

const LoginForm = () => {
  return (
    <form className="flex flex-col gap-8 w-full max-w-3xs">
      <div className="flex flex-col gap-0.5">
        <label htmlFor="email" className="text-base font-medium">
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
        <label htmlFor="password" className="text-base font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="border-b-2 border-charcoal py-4 focus:outline-none focus:ring-2 focus:ring-cerulean-blue placeholder:text-medium-gray"
        />
      </div>
      <button className="w-full max-w-64 px-4 py-3 bg-earthy-brown text-ivory font-medium rounded-full shadow-md mt-4 hover:bg-earthy-brown/80 transition duration-300">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
