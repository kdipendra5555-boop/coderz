import { BrowserRouter, Routes, Route } from "react-router-dom";

/* PUBLIC */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Events from "./pages/Events";
import AiTools from "./pages/AiTools";
import MainCourse from "./pages/MainCourse";
import SchoolForm from "./pages/SchoolForm";
import CoursePage from "./pages/CoursePage";
import CompetitionDetail from "./pages/CompetitionDetail";
import OurApproach from "./assets/components/OurApproach";
import Donate from "./assets/components/Donate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndCondition";
import SchoolApp from "./SchoolApp";

/* ADMIN */
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ManageEvents from "./admin/ManageEvents";
import AdminCourses from "./pages/AdminCourses";
import AdminCourseDetail from "./pages/AdminCourseDetail";
import AdminAiTools from "./admin/AdminAiTools";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/events" element={<Events />} />
        <Route path="/ai-tools" element={<AiTools />} />
        <Route path="/courses" element={<MainCourse />} />
        <Route path="/join-school" element={<SchoolForm />} />
        <Route path="/course/:id" element={<CoursePage />} />
        <Route path="/our-approach" element={<OurApproach />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/school-enquiry" element={<SchoolApp />} />

        {/* 🔥 USER COMPETITION DETAIL (TOP LEVEL) */}
        <Route
          path="/competition/:id"
          element={<CompetitionDetail />}
        />

        {/* ================= ADMIN ROUTES ================= */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="events" element={<ManageEvents />} />
          <Route path="courses" element={<AdminCourses />} />
          <Route
            path="courses/:courseId"
            element={<AdminCourseDetail />}
          />
          <Route path="ai-tools/add" element={<AdminAiTools />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
