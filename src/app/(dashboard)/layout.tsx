import { Header } from "@/components/dashbaord/header";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
export default function Layout({ children }: IProps) {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="flex-grow overflow-y-auto max-w-[1400px] mx-auto">{children}</div>
    </div>
  );
}
