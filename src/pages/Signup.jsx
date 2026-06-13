import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import taskImage from "../assets/bg-img.jpg";

function Signup() {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name Required"),

    email: Yup.string().email("Invalid Email").required("Email Required"),

    password: Yup.string()
      .min(6, "Minimum 6 Characters")
      .required("Password Required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords Must Match")
      .required("Confirm Password Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    try {
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const existingUser = users.find(
        (user) => user.email.toLowerCase() === values.email.toLowerCase(),
      );

      if (existingUser) {
        alert("Email Already Exists");
        return;
      }

      const newUser = {
        id: Date.now().toString(),
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
        password: values.password,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));

      resetForm();

      alert("Account Created Successfully");

      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-300 via-fuchsia-100 to-slate-200 flex items-center justify-center p-3 md:p-6">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full">
        {/* Image Section */}
        <div className="relative h-64 sm:h-80 md:h-auto">
          <img
            src={taskImage}
            alt="Task Manager"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Task Manager
            </h1>

            <p className="text-gray-200 mt-3 text-sm md:text-lg">
              Organize your productivity and manage tasks efficiently
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-fuchsia-200 via-gray-100 to-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">
            Create Account
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-5">
              {/* Name */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                />

                <ErrorMessage
                  name="name"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                />

                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                />

                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full border border-gray-300 rounded-xl p-3 bg-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
                />

                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white p-3 rounded-xl transition duration-300 shadow-lg font-medium"
              >
                Create Account
              </button>
            </Form>
          </Formik>

          <p className="mt-6 text-center md:text-left text-gray-700">
            Already Have an Account?
            <Link
              to="/login"
              className="text-fuchsia-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
