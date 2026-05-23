export default function DashboardStats() {
  const stats = [
    { title: "Courses", value: "5" },
    { title: "Completed", value: "2" },
    { title: "In Progress", value: "3" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-5 text-center"
        >
          <p className="text-gray-500 text-sm">{item.title}</p>
          <h2 className="text-2xl font-bold text-blue-600">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
