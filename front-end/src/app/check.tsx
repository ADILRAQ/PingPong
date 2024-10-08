"use client";
import Parent from "./Parent";
import { usePathname } from "next/navigation";

const Check = ({ children }: { children?: React.ReactNode }) => {
  const router = usePathname();
  return <>{router === "/login"  ? children : <Parent>{children}</Parent>}</>;
};

export default Check;

//|| (router !== "/Ranking" && router !== "/" && router !== "/Game" && router !== "Search" && router !== "Profile")