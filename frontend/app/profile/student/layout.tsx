import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import StudentProfile from "@/components/Profile/student-profile";


const montserrat = Montserrat({
  weight:["100","200","300","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
  title: "DigiSchool",
  description: "A School for everyone",
};

export default function StudentProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <StudentProfile>
          {children}
        </StudentProfile>
    </>
  );
}
