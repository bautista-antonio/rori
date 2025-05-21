import { FC } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="text-2xl font-bold text-center leading-8 max-w-xs my-4">
      {children}
    </h1>
  );
};
export default Title;
