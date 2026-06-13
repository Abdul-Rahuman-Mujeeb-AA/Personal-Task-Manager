import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TaskSchema = Yup.object({
  title: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Title is required"),

  description: Yup.string()
    .min(10, "Minimum 10 characters")
    .required("Description is required"),

  dueDate: Yup.date().required("Due date is required"),

  priority: Yup.string()
    .oneOf(["Low", "Medium", "High"])
    .required("Priority is required"),

  status: Yup.string()
    .oneOf(["Pending", "In Progress", "Completed"])
    .required("Status is required"),

  category: Yup.string().required("Category is required"),
});

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

const errorClass = "mt-1 text-sm font-medium text-red-500";

const TaskForm = ({ onClose, onSubmit }) => {
  const initialValues = {
    title: "",
    description: "",
    dueDate: "",
    priority: "Medium",
    status: "Pending",
    category: "",
  };

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    onSubmit(values);

    resetForm();

    setSubmitting(false);

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3">
      <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Create New Task
              </h2>

              <p className="mt-1 text-sm text-blue-100">
                Stay organized and productive
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl text-white transition hover:bg-red-500"
            >
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="max-h-[80vh] overflow-y-auto p-5 md:p-8">
          <Formik
            initialValues={initialValues}
            validationSchema={TaskSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                {/* Title */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Task Title
                  </label>

                  <Field
                    type="text"
                    name="title"
                    placeholder="Enter task title"
                    className={inputClass}
                  />

                  <ErrorMessage
                    name="title"
                    component="p"
                    className={errorClass}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Description
                  </label>

                  <Field
                    as="textarea"
                    rows="5"
                    name="description"
                    placeholder="Describe your task..."
                    className={`${inputClass} resize-none`}
                  />

                  <ErrorMessage
                    name="description"
                    component="p"
                    className={errorClass}
                  />
                </div>

                {/* Due Date */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Due Date
                  </label>

                  <Field type="date" name="dueDate" className={inputClass} />

                  <ErrorMessage
                    name="dueDate"
                    component="p"
                    className={errorClass}
                  />
                </div>

                {/* Priority & Status */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Priority
                    </label>

                    <Field as="select" name="priority" className={inputClass}>
                      <option value="Low">🟢 Low</option>

                      <option value="Medium">🟡 Medium</option>

                      <option value="High">🔴 High</option>
                    </Field>

                    <ErrorMessage
                      name="priority"
                      component="p"
                      className={errorClass}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Status
                    </label>

                    <Field as="select" name="status" className={inputClass}>
                      <option value="Pending">Pending</option>

                      <option value="In Progress">In Progress</option>

                      <option value="Completed">Completed</option>
                    </Field>

                    <ErrorMessage
                      name="status"
                      component="p"
                      className={errorClass}
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Category
                  </label>

                  <Field
                    type="text"
                    name="category"
                    placeholder="Work, Personal, Study..."
                    className={inputClass}
                  />

                  <ErrorMessage
                    name="category"
                    component="p"
                    className={errorClass}
                  />
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 flex flex-col gap-3 border-t border-slate-200 bg-white pt-5 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100 sm:w-auto"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:shadow-xl disabled:opacity-50 sm:w-auto"
                  >
                    {isSubmitting ? "Saving..." : "Save Task"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
