import { Routes, Route } from "react-router-dom"
import { Home, About } from "./pages/index"
import Header from "./components/Header"
import Config from "./components/Config"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/config/:id" element={<Config />} />
      </Routes>
    </>
  )
}

export default App
