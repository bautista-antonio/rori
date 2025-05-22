import Image from "next/image";
import Link from "next/link";

import Title from "@/components/Title/Title";
import Button from "@/components/Button/Button";
import AppleLogo from "@/icons/social/apple-logo.svg";
import GoogleLogo from "@/icons/social/google-logo.svg";

const CreateAccount = () => {
  return (
    <main className="flex flex-col gap-6 items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <h2 className="font-medium text-sm text-center text-earthy-brown">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </h2>
        <Title
          as="h1"
          text="Create your account"
          color="dark"
          size="sm"
          align="center"
        ></Title>
      </div>
      <Image
        src="/images/create-account-collage.png"
        alt="Collage of cozy food moments: cooking, pizza night, charcuterie, and nachos, styled like a nostalgic scrapbook."
        className="w-full object-cover"
        width={1572}
        height={1357}
        priority={true}
      />
      <div className="flex flex-col gap-4.5 max-w-3xs justify-center">
        <Button
          fullWidth={true}
          type="button"
          variant="social"
          text="Continue with email"
        />
        <Button
          fullWidth={true}
          icon={<GoogleLogo />}
          type="button"
          variant="social"
          text="Continue with Google"
          iconPosition="left"
        />
        <Button
          fullWidth={true}
          icon={<AppleLogo />}
          type="button"
          variant="social"
          text="Continue with Apple"
          iconPosition="left"
        />
      </div>
    </main>
  );
};

export default CreateAccount;
