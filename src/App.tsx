import { Route, Routes } from "react-router"
import { HomeLanding } from "./pages/HomeLanding"

function App() {
  return (
      <Routes>
        <Route index path="/Home" element={<HomeLanding />} />
      </Routes>
  )
}

export default App
