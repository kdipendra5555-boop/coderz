import { motion } from "framer-motion";
import { useState } from "react";
import { Mail } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://https://https://coderz-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Invalid email or password");
        setLoading(false);
        return;
      }

      // 🔐 SAVE AUTH DATA
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data.name,
          role: data.role,
          email: email,
        })
      );

      // ✅ ROLE BASED REDIRECT (NO LOOP)
      if (data.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        navigate("/", { replace: true });
      }

    } catch (err) {
      setError("Server error, try again");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        {/* LEFT */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600">
          <img
            src="https://undraw.co/api/illustrations/secure_login.svg"
            alt="Login"
            className="w-[80%]"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-8">
          <motion.div
            animate={error ? { x: [-8, 8, -6, 6, 0] } : {}}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm"
          >
            <h2 className="text-3xl font-bold">Welcome Back</h2>
            <p className="text-gray-500 mt-2">
              Login to continue to{" "}
              <span className="text-blue-600 font-semibold">
                Coderz Cafe
              </span>
            </p>

            {/* GOOGLE (UI ONLY) */}
            <div className="mt-6">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border py-3 rounded-xl"
              >
                <Mail className="w-5 h-5" />
                Continue with Google
              </button>
            </div>

            <div className="my-5 flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl"
              />

              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-xl"
              />

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className={`w-full py-3 rounded-xl font-medium
                  ${
                    loading
                      ? "bg-gray-400 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
              >
                {loading ? "Logging in..." : "Login"}
              </motion.button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-medium">
                Sign up
              </Link>
            </p>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
