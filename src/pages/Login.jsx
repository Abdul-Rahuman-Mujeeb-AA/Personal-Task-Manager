import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import taskImage from "../assets/bg-img.jpg";

function Login() {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email Required"),

    password: Yup.string().required("Password Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const user = users.find(
        (u) => u.email.toLowerCase() === values.email.toLowerCase(),
      );

      if (!user) {
        alert("Email Does Not Exist");
        return;
      }

      if (user.password !== values.password) {
        alert("Incorrect Password");
        return;
      }

      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

      if (currentUser?.email === user.email) {
        alert("User Already Logged In");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("userId", user.id);
      localStorage.setItem("loggedUser", JSON.stringify(user));

      resetForm();

      alert(`Welcome ${user.name}`);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-blue-100 to-slate-200 flex items-center justify-center p-3 md:p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 md:h-auto">
          <img
            src={taskImage}
            alt="Task Manager"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Task Manager
            </h1>

            <p className="text-gray-200 mt-3 text-sm md:text-lg">
              Track your daily goals and boost productivity
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            Login
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-5">
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl p-3 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full rounded-xl p-3 bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                />

                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl p-3 transition duration-300 shadow-lg"
              >
                Login
              </button>
            </Form>
          </Formik>

          <p className="mt-6 text-center md:text-left text-gray-300">
            Don't Have an Account?
            <Link
              to="/signup"
              className="text-green-400 font-semibold ml-2 hover:underline"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
