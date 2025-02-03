import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { NotificationProvider } from "./context/NotificationContext"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import PregnancyTracker from "./components/PregnancyTracker"
import BabyHealth from "./components/BabyHealth"
import Community from "./components/Community"
import Notifications from "./components/Notifications"

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <NotificationProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pregnancy" element={<PregnancyTracker />} />
              <Route path="/baby-health" element={<BabyHealth />} />
              <Route path="/community" element={<Community />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </Layout>
        </Router>
      </NotificationProvider>
    </ThemeProvider>
  )
}

export default App

