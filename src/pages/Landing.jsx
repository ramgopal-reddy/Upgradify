import React from "react";
import { useNavigate } from "react-router-dom";
import LogoBlack from "../assets/UpgradifyLogoBlack.png";
import LogoWhite from "../assets/UpgradifyLogoWhite.png";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "AI Recommendations",
      description:
        "Get personalized career recommendations based on your interests, skills, and goals.",
    },
    {
      title: "Action Plans",
      description:
        "Step-by-step action plans to help you achieve your career goals with clear milestones.",
    },
    {
      title: "Gamification",
      description:
        "Earn points, unlock badges, and compete on leaderboards to stay motivated.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <img src={LogoWhite} alt="Upgradify Logo" className="h-10 w-10" />
              <h1 className="text-xl font-bold pb-1">Upgradify</h1>
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6">
                Level Up Your Future with Personalized AI Recommendations
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Discover your ideal career path with AI-powered insights,
                personalized action plans, and gamified learning experiences
                designed for students and young professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/onboarding")}
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Sign Up Free
                </button>
                <button
                  onClick={() => navigate("/onboarding")}
                  className="border-2 border-teal-500 text-teal-500 hover:bg-teal-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-gray-600 mb-4 text-center">
                Dashboard Preview
              </h3>
              <div className="bg-gray-100 rounded-lg p-12 text-center">
                <img
                  src={LogoBlack}
                  alt="Upgradify Logo"
                  className="mx-auto mb-4 w-64 h-64 object-contain"
                />
                <p className="text-gray-500 text-lg">
                  Interactive Dashboard Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">
            Why Choose Upgradify?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students and professionals who are already
            leveling up their careers.
          </p>
          <button
            onClick={() => navigate("/onboarding")}
            className="bg-teal-500 hover:bg-teal-600 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-colors"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <h3 className="text-xl font-bold text-blue-900">Upgradify</h3>
              </div>
              <p className="text-gray-600">
                Empowering the next generation of professionals with AI-driven
                career guidance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">About</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Our Mission</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Support</li>
                <li>Partnership</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>© 2024 Upgradify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
