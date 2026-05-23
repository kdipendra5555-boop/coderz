import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://coderz-1.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // 👇 BACKEND MESSAGE DIRECT SHOW
        setError(data.msg || "Registration failed");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setLoading(false);

      // 👉 redirect after success
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setLoading(false);
      setError("Server not responding. Check backend.");
    }
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT IMAGE */}
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d1?auto=format&fit=crop&w=1200&q=80"
            alt="Signup"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center px-8">
          <motion.div
            animate={error ? { x: [-6, 6, -4, 4, 0] } : {}}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            <h2 className="text-3xl font-bold">Create Account</h2>
            <p className="text-gray-500 mt-2">
              Join <span className="text-indigo-600 font-semibold">Coderz Cafe</span>
            </p>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl"
              >
                <Mail size={18} />
                Sign up with Google
              </button>
            </div>

            <div className="my-5 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl"
              />

              {error && (
                <p className="text-sm text-red-600">{error}</p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.96 }}
                className={`w-full py-3 rounded-xl font-medium
                  ${
                    success
                      ? "bg-green-600 text-white"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
              >
                {loading
                  ? "Creating account..."
                  : success
                  ? (
                    <>
                      <Check className="inline mr-2" size={18} />
                      Account Created
                    </>
                  )
                  : "Create Account"}
              </motion.button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-600 font-medium">
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
