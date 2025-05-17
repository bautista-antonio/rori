import Image from "next/image";

export default function Welcome() {
  return (
    <div className="flex flex-col items-center gap-12 mx-4">
      <h1 className="text-4xl font-bold text-center leading-10 max-w-xs my-6">
        The meals we love often start with a story
      </h1>
      <Image
        src="/images/welcome-screen/welcome-screen-illustration.png"
        alt="Welcome"
        width={300}
        height={300}
      />
      <p className="mt-2 text-lg">Let's start writing yours!</p>
      <button className="w-full max-w-64 px-4 py-3 bg-earthy-brown text-ivory font-semibold rounded-full shadow-md mt-4 hover:bg-earthy-brown/80 transition duration-300">
        Dig In
      </button>
    </div>
  );
}
