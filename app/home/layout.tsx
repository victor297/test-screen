import NavTab from "@/app/components/NavTab";
import Image from "next/image";

export const metadata = {
  title: "NovaNest",
  description: "admin page for novanest",
};
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <NavTab /> */}
      {children}
    </div>
  );
};

export default HomeLayout;
