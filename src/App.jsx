import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminLayout from "./pages/AdminLayout";
import VersionRequestList from "./pages/VersionRequestListPage";
import FeVersionRequest from "./pages/FeVersionRequestPage";
import BeVersionRequest from "./pages/BeVersionRequestPage";
import VersionDetailPage from "./pages/VersionDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AdminLayout />}>
          <Route
            path="/version-request-list"
            element={<VersionRequestList />}
          />
          <Route path="/version-detail/:id" element={<VersionDetailPage />} />
          <Route
            path="/fe-version-request"
            element={<FeVersionRequest title="前端发版" />}
          />
          <Route path="/be-version-request" element={<BeVersionRequest title="後端发版" /> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
