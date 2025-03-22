import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

// Layouts
import MainLayout from "./components/layout/MainLayout";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Public Pages
import AboutApp from "./pages/about/AboutApp";
import Approach from "./pages/about/Approach";

// Protected Pages
import Personality from "./pages/tests/Personality";
import Interest from "./pages/tests/Interest";
import Aptitude from "./pages/tests/Aptitude";
import PersonalityResult from "./pages/results/PersonalityResult";
import InterestResult from "./pages/results/InterestResult";
import AptitudeResult from "./pages/results/AptitudeResult";
import CombinedRecommendations from "./pages/results/CombinedRecommendations";
import GuruBKDashboard from "./pages/dashboard/GuruBKDashboard";
import UserProfile from "./pages/profile/UserProfile";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) return <div className="loading">Loading...</div>;

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<AboutApp />} />
        <Route path="about" element={<AboutApp />} />
        <Route path="approach" element={<Approach />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<GuruBKDashboard />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="tests">
          <Route
            path="personality"
            element={
              <ProtectedRoute>
                <Personality />
              </ProtectedRoute>
            }
          />
          <Route
            path="interest"
            element={
              <ProtectedRoute>
                <Interest />
              </ProtectedRoute>
            }
          />
          <Route
            path="aptitude"
            element={
              <ProtectedRoute>
                <Aptitude />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="results">
          <Route
            path="personality"
            element={
              <ProtectedRoute>
                <PersonalityResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="interest"
            element={
              <ProtectedRoute>
                <InterestResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="aptitude"
            element={
              <ProtectedRoute>
                <AptitudeResult />
              </ProtectedRoute>
            }
          />
          <Route
            path="recommendations"
            element={
              <ProtectedRoute>
                <CombinedRecommendations />
              </ProtectedRoute>
            }
          />
        </Route>
      </Route>

      {/* 404 - Not Found */}
      <Route
        path="*"
        element={
          <MainLayout>
            <div className="container text-center mt-5">
              <h1>404 - Halaman Tidak Ditemukan</h1>
              <p>Halaman yang Anda cari tidak tersedia.</p>
            </div>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
