import { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-center leading-10 max-w-xs my-6">
      {children}
    </h1>
  );
};
export default Title;
