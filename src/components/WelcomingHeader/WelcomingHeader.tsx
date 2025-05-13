import { FC } from "react";
import { UserName } from "@/types/user";
import shantellSans from "@/fonts/shantell-sans";

const WelcomingHeader: FC<UserName> = ({ name }) => {
  return (
    <h1 className="text-2xl font-bold text-center max-w-3xs my-6">
      Hey, <span className={shantellSans.className}>{name}</span>!{" "}
      <span className="text-medium-gray">What will you cook today?</span>
    </h1>
  );
};

export default WelcomingHeader;
