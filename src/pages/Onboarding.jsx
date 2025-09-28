import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const Onboarding = () => {
  const navigate = useNavigate();
  const { signup, loginWithGoogle } = useAuth();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const steps = ["Sign Up", "Profile Setup", "Welcome"];

  const interestTags = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Arts",
    "Sports",
    "Engineering",
    "Marketing",
    "Design",
    "Science",
    "Business",
    "Law",
  ];

  const gradeOptions = [
    "High School Freshman",
    "High School Sophomore",
    "High School Junior",
    "High School Senior",
    "College Freshman",
    "College Sophomore",
    "College Junior",
    "College Senior",
    "Graduate Student",
    "Recent Graduate",
    "Working Professional",
  ];

  const careerGoals = [
    "Get into my dream college",
    "Land my first job",
    "Switch careers",
    "Get promoted",
    "Start my own business",
    "Learn new skills",
  ];

  // Sign up form validation
  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  // Profile setup validation
  const profileSchema = Yup.object().shape({
    age: Yup.number()
      .min(13, "Must be at least 13")
      .max(100, "Invalid age")
      .required("Age is required"),
    grade: Yup.string().required("Grade level is required"),
    interests: Yup.array()
      .min(1, "Select at least one interest")
      .required("Interests are required"),
    careerGoal: Yup.string().required("Career goal is required"),
    targetCollege: Yup.string(),
    targetJob: Yup.string(),
  });

  const handleSignup = async (values) => {
    setLoading(true);
    setError("");
    try {
      await signup(values.email, values.password, { name: values.name });
      setActiveStep(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError("");
    try {
      await loginWithGoogle();
      setActiveStep(1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSetup = async (values) => {
    setLoading(true);
    setError("");
    try {
      setActiveStep(2);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = () => {
    navigate("/dashboard");
  };

  const renderSignupForm = () => (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={signupSchema}
      onSubmit={handleSignup}
    >
      {({ errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <Field
              name="name"
              autoComplete="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Field
              name="email"
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <Field
              name="password"
              type="password"
              autoComplete="new-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Create a password"
            />
            {touched.password && errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <Field
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Confirm your password"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </Form>
      )}
    </Formik>
  );

  const renderProfileSetup = () => (
    <Formik
      initialValues={{
        age: "",
        grade: "",
        interests: [],
        careerGoal: "",
        targetCollege: "",
        targetJob: "",
      }}
      validationSchema={profileSchema}
      onSubmit={handleProfileSetup}
    >
      {({ values, setFieldValue, errors, touched }) => (
        <Form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age
            </label>
            <Field
              name="age"
              type="number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your age"
            />
            {touched.age && errors.age && (
              <p className="text-red-500 text-sm mt-1">{errors.age}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Grade Level
            </label>
            <Field
              as="select"
              name="grade"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select your grade level</option>
              {gradeOptions.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </Field>
            {touched.grade && errors.grade && (
              <p className="text-red-500 text-sm mt-1">{errors.grade}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interests (Select all that apply)
            </label>
            <div className="flex flex-wrap gap-2">
              {interestTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    const newInterests = values.interests.includes(tag)
                      ? values.interests.filter((i) => i !== tag)
                      : [...values.interests, tag];
                    setFieldValue("interests", newInterests);
                  }}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    values.interests.includes(tag)
                      ? "bg-blue-900 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            {touched.interests && errors.interests && (
              <p className="text-red-500 text-sm mt-1">{errors.interests}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Career Goal
            </label>
            <Field
              as="select"
              name="careerGoal"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select your career goal</option>
              {careerGoals.map((goal) => (
                <option key={goal} value={goal}>
                  {goal}
                </option>
              ))}
            </Field>
            {touched.careerGoal && errors.careerGoal && (
              <p className="text-red-500 text-sm mt-1">{errors.careerGoal}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target College (Optional)
            </label>
            <Field
              name="targetCollege"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter target college"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Target Job/Company (Optional)
            </label>
            <Field
              name="targetJob"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter target job or company"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors"
          >
            {loading ? "Completing Setup..." : "Complete Setup"}
          </button>
        </Form>
      )}
    </Formik>
  );

  const renderWelcome = () => (
    <div className="text-center">
      <div className="text-6xl mb-6">🚀</div>
      <h2 className="text-3xl font-bold text-blue-900 mb-4">
        Welcome to Upgradify!
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        You're all set to start your career journey. Let's get you some
        personalized recommendations!
      </p>
      <button
        onClick={handleComplete}
        className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
      >
        Go to Dashboard
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🚀</div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">
              Join Upgradify
            </h1>
            <p className="text-gray-600">
              {activeStep === 0 && "Create your account to get started"}
              {activeStep === 1 &&
                "Tell us about yourself for personalized recommendations"}
              {activeStep === 2 && "You're ready to level up your career!"}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      index <= activeStep
                        ? "bg-blue-900 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 ${
                        index < activeStep ? "bg-blue-900" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Form Content */}
          {activeStep === 0 && (
            <div>
              {renderSignupForm()}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>
              <button
                onClick={handleGoogleSignup}
                disabled={loading}
                className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                🔗 Continue with Google
              </button>
            </div>
          )}

          {activeStep === 1 && renderProfileSetup()}
          {activeStep === 2 && renderWelcome()}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
