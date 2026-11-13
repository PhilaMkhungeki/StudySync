import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Dashboard from "./components/Dashboard"
function App() {

  return (
    <>
      <Header />
      <div className="main-page">
        <Navigation />

        <main className="main-content">
          <Dashboard />
        </main>
        
      </div>
      
    </>
  )
}

export default App
