import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface IProps {
  children: ReactNode;
}
export default function Layout({ children }: IProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
