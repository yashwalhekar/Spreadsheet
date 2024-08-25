import "./globals.css";
import Spreadsheet from "./components/Spreadsheet";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Spreadsheet />
      </body>
    </html>
  );
}
