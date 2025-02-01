import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import PregnancyTracker from "./components/PregnancyTracker"
import BabyHealth from "./components/BabyHealth"
import Community from "./components/Community"
import Notifications from "./components/Notifications"
import Profile from "./components/Profile"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pregnancy" element={<PregnancyTracker />} />
            <Route path="/baby-health" element={<BabyHealth />} />
            <Route path="/community" element={<Community />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App

