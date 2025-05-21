import Image from "next/image";
import Link from "next/link";

const CreateAccount = () => {
  <main>
    <div>
      <h2>
        Already have an account?{" "}
        <Link href="/login" className="underline">
          Sign in
        </Link>
      </h2>
      {/* Add Title */}
    </div>
    <Image
      src="./public/images/create-account-collage.png"
      alt="Collage of cozy food moments: cooking, pizza night, charcuterie, and nachos, styled like a nostalgic scrapbook."
      className="w-full object-cover"
    />
    <div>{/* Add sign up Buttons */}</div>
  </main>;
};

export default CreateAccount;
