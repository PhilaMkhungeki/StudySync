import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Dashboard from "./components/Dashboard"
import Sessions from "./components/Sessions"
import { useState } from "react"

function App() {

  const [activePage, setActivePage] = useState("dashboard");
  const [sessions, setSessions] = useState([]);

  const handleAddSession = (newSession) => {

        const sessionWithId = {
            ...newSession,
            id: Date.now()
        };

        setSessions(prevSessions => [...prevSessions, sessionWithId]);
  };

  return (
    <>
      <Header />
      <div className="main-page">
        <Navigation activePage={activePage} onNavigate={setActivePage}/>

        <main className="main-content">
          {activePage === "dashboard" && <Dashboard />}
          {activePage === "sessions" && <Sessions sessions={sessions} addSession={handleAddSession}/>}
        
        </main>
        
      </div>
      
    </>
  )
}

export default App
