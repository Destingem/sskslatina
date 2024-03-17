import { createTheme, MantineProvider } from "@mantine/core"
import '@mantine/core/styles.css';
import "styles/tailwind.css"
import '@mantine/carousel/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body>
        <MantineProvider theme={theme}>
        {children}
        </MantineProvider>
      </body>
    </html>
  )
}
