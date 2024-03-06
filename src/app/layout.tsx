import BackGround from "@/components/bg";
import "../styles/login/landingPage.css";

export const metadata = {
  title: "PONGy",
  description: "Generated by 1337",
};

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackGround />
        {children}
      </body>
    </html>
  );
}
