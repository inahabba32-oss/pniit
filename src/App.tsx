import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { useAuth } from './contexts/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { InspectionsPage } from './pages/InspectionsPage';
import { ComplaintsPage } from './pages/ComplaintsPage';
import { ReportsPage } from './pages/ReportsPage';
import { FindingsPage } from './pages/FindingsPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { InspectionDetailPage } from './pages/InspectionDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="entreprises" element={<CompaniesPage />} />
        <Route path="missions" element={<InspectionsPage />} />
        <Route path="mission/:id" element={<InspectionDetailPage />} />
        <Route path="constats" element={<FindingsPage />} />
        <Route path="plaintes" element={<ComplaintsPage />} />
        <Route path="rapports" element={<ReportsPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
