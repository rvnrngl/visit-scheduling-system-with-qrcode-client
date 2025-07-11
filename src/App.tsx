import { Navigate, Route, Routes } from "react-router";
import { HomeLanding } from "./pages/HomeLanding";
import { LandingPageLayout } from "./layouts/LandingPageLayout";
import { About } from "./pages/About";
import { Contacts } from "./pages/Contacts";
import { AdminDashboardLayout } from "./layouts/AdminDashboardLayout";
import { Dashboard } from "./pages/Admin/Dashboard";
import { VisitRequest } from "./pages/Admin/VisitRequest";
import { QRScan } from "./pages/Admin/QRScan";
import { Records } from "./pages/Admin/Records";
import { AuditLog } from "./pages/Admin/AuditLog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />

      <Route path="/" element={<LandingPageLayout />}>
        <Route path="home" element={<HomeLanding />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>

      <Route path="/admin" element={<AdminDashboardLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="visit-requests" element={<VisitRequest />} />
        <Route path="qr-scan" element={<QRScan />} />
        <Route path="records" element={<Records />} />
        <Route path="logs" element={<AuditLog />} />
      </Route>
    </Routes>
  );
}

export default App;
