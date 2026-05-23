export default function DashboardCourses() {
  const courses = [
    { name: "Java Basics", progress: "40%" },
    { name: "React Fundamentals", progress: "70%" },
    { name: "DSA for Beginners", progress: "20%" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Your Courses
      </h2>

      <div className="space-y-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-5"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium">{course.name}</p>
              <span className="text-sm text-gray-500">
                {course.progress}
              </span>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: course.progress }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
