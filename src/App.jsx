import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Dashboard from "./components/Dashboard"
import Sessions from "./components/Sessions"
import { useState } from "react"

function App() {

  const [activePage, setActivePage] = useState("dashboard");

  return (
    <>
      <Header />
      <div className="main-page">
        <Navigation activePage={activePage} onNavigate={setActivePage}/>

        <main className="main-content">
          {activePage === "dashboard" && <Dashboard />}
          {activePage === "sessions" && <Sessions />}
        
        </main>
        
      </div>
      
    </>
  )
}

export default App
