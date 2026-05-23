import DashboardHeader from "../assets/components/DashboardHeader";
import DashboardStats from "../assets/components/DashboardStats";
import DashboardCourses from "../assets/components/DashboardCourses";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <DashboardHeader />
      <DashboardStats />
      <DashboardCourses />
    </div>
  );
}
