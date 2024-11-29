import React from 'react';
import { instructors } from '../data/instructors';
import { Star, Users } from 'lucide-react';

export const Instructors: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Meet Our Expert Instructors
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn from industry experts with years of real-world experience
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex items-center">
                <img
                  src={instructor.avatar}
                  alt={instructor.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {instructor.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">4.9 Instructor Rating</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  <span>50,000+ students</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <span>15+ courses</span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium text-gray-900">Expertise</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    Web Development
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    React
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                    JavaScript
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};