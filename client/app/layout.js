import "./globals.css";
/*
* TODO
// import Pie from "./components/piecera";
*/
import Naver from "./components/cabezera";

export const metadata = {
  title: "Knowy",
  description: "Compra y venta de cursos online",
  keywords: "cursos, online, compra, venta, formacion, trabajo, estudiar, programacion, tech, titulos, certificados",
  openGraph: {
    title: "Knowy Courses",
    description: "Portal de compra y venta de cursos",
    image: "/pet.png",
    site_name: "Knowy",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/lupa.png"></link>
      </head>
      <body>
        <Naver />
        
        {children}

      </body>
    </html>
  );
}
