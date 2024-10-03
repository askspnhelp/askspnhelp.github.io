import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "SPN - Student Professional Network",
  description:
    "Driving Student Success. For the Ismaili Community, by the Ismaili Community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/SPN_Logo_No_text.png" />
      </head>

      <body className="flex flex-col h-screen justify-between mx-2">
        <div className="mx-auto mb-8 flex w-full max-w-6xl flex-col justify-center">
          <div className="max-w-6xl flex-grow">{children}</div>
        </div>
      </body>
    </html>
  );
}
