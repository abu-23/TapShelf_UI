import { Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Layout from "./components/Layout/Layout";
import DashboardPage from "./pages/DashboardPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import ReportsPage from "./pages/ReportsPage";
import OrdersPage from "./pages/OrdersPage";
import SuppliersPage from "./pages/SuppliersPage";
import ManagePage from "./pages/ManagePage";
import SettingsPage from "./pages/SettingsPage";
import LogoutPage from "./pages/LogoutPage";

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route exact path="/inventory" element={<InventoryPage />} />
          <Route exact path="/reports" element={<ReportsPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/manage" element={<ManagePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Route>
      </Routes>
  );
}

export default App;
