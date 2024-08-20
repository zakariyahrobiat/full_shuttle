import { PropsWithChildren } from "react";
interface BackgroundImageLayoutProps extends PropsWithChildren {
  className?: string;
}

const BackgroundImageLayout = ({
  children,
  className = "",
}: BackgroundImageLayoutProps) => {
  return (
    <main
      className={`bg-black box-border bg-cover flex text-white flex-col h-[100%] p-3 subpixel-antialiased font-mono md:p-10 ${className}`}
    >
      {children}
    </main>
  );
};

export default BackgroundImageLayout;
