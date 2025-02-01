// src/components/HomePage.tsx (or src/components/Home.tsx)
import React from 'react'; // Import React if you're not already
import Dashboard from "@/components/Dashboard"; // Assuming Dashboard.tsx is in the same components directory

const HomePage: React.FC = () => { // Use React.FC for functional components with type safety
  return (
    <main className="min-h-screen bg-off-white">
      <Dashboard />
    </main>
  );
};

export default HomePage;