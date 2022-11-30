import { ThemeProvider } from "@emotion/react"
import { Routes_Services } from "./routes/routes"
import { LightTheme } from "./shared/themes/LightTheme"

function App() {

  return (
    <ThemeProvider theme={LightTheme}>
      <Routes_Services />
    </ThemeProvider>
  )
}

export default App
