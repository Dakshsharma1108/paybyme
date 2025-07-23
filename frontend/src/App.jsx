import { PayByMeSignUp } from './components/sign-up.jsx';
import { PayByMeLogin } from './components/login.jsx';
import { PayByMeHome } from './components/home.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';
import { PayByMeDashboard } from './components/dashboard.jsx';


function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-indigo-600 text-2xl font-bold animate-bounce">Loading...</div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      {loading && <LoadingScreen />}
      <Routes>
        <Route path="/" element={<PayByMeHome />} />
        <Route path="/login" element={<PayByMeLogin setLoading={setLoading} />} />
        <Route path="/signup" element={<PayByMeSignUp setLoading={setLoading} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <PayByMeDashboard setLoading={setLoading} />
            </ProtectedRoute>
          }
          />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
