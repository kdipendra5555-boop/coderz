export default function ProfileDetails() {
  return (
    <section className="max-w-4xl mx-auto mt-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Info Card */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Profile Info</h2>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li><b>Email:</b> dipendra@example.com</li>
            <li><b>Joined:</b> Jan 2025</li>
            <li><b>Role:</b> Student</li>
          </ul>
        </div>

        {/* Progress Card */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-semibold mb-4">Learning Progress</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm mb-1">Java</p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-600 rounded-full w-[60%]" />
              </div>
            </div>

            <div>
              <p className="text-sm mb-1">React</p>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-purple-600 rounded-full w-[40%]" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
