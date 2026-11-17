import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Dashboard from "./components/Dashboard"
import Sessions from "./components/Sessions"
import AddSession from "./components/AddSession"

function App() {

  return (
    <>
      <Header />
      <div className="main-page">
        <Navigation />

        <main className="main-content">
          {/*<Dashboard /> */}
          <Sessions />
          {/*<AddSession />*/}
        </main>
        
      </div>
      
    </>
  )
}

export default App
