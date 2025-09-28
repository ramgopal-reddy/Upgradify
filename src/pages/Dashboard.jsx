import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { currentUser, userProfile, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Recommendations", path: "/recommendations" },
    { text: "Action Plans", path: "/action-plans" },
    { text: "Templates", path: "/templates" },
    { text: "Leaderboard", path: "/leaderboard" },
    { text: "Profile", path: "/profile" },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    setSidebarOpen(false);
  };

  // Mock data for dashboard
  const recommendations = [
    {
      id: 1,
      title: "Software Engineering",
      description: "Based on your interest in technology",
      tags: ["Technology", "Programming"],
    },
    {
      id: 2,
      title: "Data Science",
      description: "Great match for your analytical skills",
      tags: ["Analytics", "Technology"],
    },
    {
      id: 3,
      title: "Product Management",
      description: "Perfect for your leadership qualities",
      tags: ["Business", "Leadership"],
    },
  ];

  const actionPlans = [
    {
      id: 1,
      title: "Build a Portfolio Website",
      progress: 60,
      steps: [
        "Research technologies",
        "Design layout",
        "Build frontend",
        "Add projects",
        "Deploy",
      ],
    },
    {
      id: 2,
      title: "Learn Python Programming",
      progress: 30,
      steps: [
        "Complete basics",
        "Build projects",
        "Join community",
        "Contribute to open source",
      ],
    },
  ];

  const badges = [
    {
      name: "First Steps",
      description: "Completed your first action plan",
    },
    {
      name: "Tech Explorer",
      description: "Explored 5 technology careers",
    },
    {
      name: "Goal Setter",
      description: "Set your first career goal",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 px-4 border-b border-blue-800">
          <span className="text-2xl mr-2">🚀</span>
          <span className="text-xl font-bold">Upgradify</span>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <button
              key={item.text}
              onClick={() => handleNavigation(item.path)}
              className="w-full flex items-center px-6 py-3 text-left hover:bg-blue-800 transition-colors"
            >
              <span className="text-xl mr-3">{item.emoji}</span>
              <span>{item.text}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <span className="text-xl">☰</span>
              </button>
              <h1 className="text-2xl font-bold text-blue-900 ml-4">
                Dashboard
              </h1>
            </div>

            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
              >
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {userProfile?.name?.charAt(0) || "U"}
                </div>
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <button
                    onClick={() => {
                      setProfileMenuOpen(false);
                      navigate("/profile");
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    <span className="mr-2">⚙️</span>
                    Settings
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                  >
                    <span className="mr-2">🚪</span>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Welcome back, {userProfile?.name || "User"}! 👋
              </h2>
              <p className="text-lg text-gray-600">
                Ready to continue your career journey?
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Recommendations Panel */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      🤖 AI Recommendations
                    </h3>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {userProfile?.dailyRecommendations || 0}/3 used today
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Get personalized career recommendations based on your
                    profile and interests.
                  </p>
                  <button
                    onClick={() => navigate("/recommendations")}
                    disabled={(userProfile?.dailyRecommendations || 0) >= 3}
                    className="bg-blue-900 hover:bg-blue-800 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors mb-6"
                  >
                    🤖 Get AI Recommendation
                  </button>

                  {/* Recent Recommendations */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Recent Recommendations
                  </h4>
                  <div className="space-y-3">
                    {recommendations.map((rec) => (
                      <div
                        key={rec.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <h5 className="font-semibold text-gray-900 mb-2">
                          {rec.title}
                        </h5>
                        <p className="text-gray-600 text-sm mb-3">
                          {rec.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {rec.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Plans */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    📋 Action Plan Tracker
                  </h3>
                  <div className="space-y-4">
                    {actionPlans.map((plan) => (
                      <div
                        key={plan.id}
                        className="border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {plan.title}
                          </h4>
                          <span className="text-sm text-gray-600">
                            {plan.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                          <div
                            className="bg-teal-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${plan.progress}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-600">
                          {Math.floor(
                            (plan.steps.length * plan.progress) / 100
                          )}{" "}
                          of {plan.steps.length} steps completed
                        </p>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate("/action-plans")}
                    className="mt-4 border-2 border-teal-500 text-teal-500 hover:bg-teal-50 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    📋 View All Action Plans
                  </button>
                </div>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-6">
                {/* Progress Card */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🏆 Your Progress
                  </h3>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-orange-500 mb-2">
                      {userProfile?.points || 0}
                    </div>
                    <p className="text-gray-600">Points Earned</p>
                  </div>
                  <button
                    onClick={() => navigate("/leaderboard")}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    🏆 View Leaderboard
                  </button>
                </div>

                {/* Badges Card */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🎖️ Badges Earned
                  </h3>
                  <div className="space-y-3">
                    {badges.map((badge, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-2xl">{badge.icon}</span>
                        <div>
                          <p className="font-semibold text-gray-900">
                            {badge.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            {badge.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
