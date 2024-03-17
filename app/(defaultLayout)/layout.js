import UIWrapper from "../components/UIWrapper/UIWrapper";
export default function Layout({ children }) {
  return (
    <>
      <body>
      <UIWrapper>
        {children}
       </UIWrapper>
      </body>
    </>
  )
}