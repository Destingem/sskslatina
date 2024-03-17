import Footer from "./Footer";
import Header from "./Header";


export default function UIWrapper({ children }) {
  return (
    <>
      <body>
      <Header />
        {children}
        <Footer />
      </body>
    </>
  )
}