import React from 'react';
import { DashboardLayout } from '../components/dashboard/DashboardLayout';
import { Clock, BookOpen, Award, TrendingUp } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export const Dashboard: React.FC = () => {
  const { user } = useAuthStore();

  const stats = [
    { name: 'Courses in Progress', value: '4', icon: BookOpen },
    { name: 'Hours Learned', value: '28', icon: Clock },
    { name: 'Certificates Earned', value: '2', icon: Award },
    { name: 'Course Completion', value: '85%', icon: TrendingUp },
  ];

  const recentCourses = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      progress: 65,
      lastAccessed: '2 hours ago',
    },
    {
      id: '2',
      title: 'Machine Learning A-Z',
      progress: 30,
      lastAccessed: '1 day ago',
    },
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Here's an overview of your learning progress
        </p>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        {stat.name}
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {stat.value}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Courses */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Courses</h2>
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {recentCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {course.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Last accessed {course.lastAccessed}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          {course.progress}% Complete
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                      <div
                        style={{ width: `${course.progress}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};