import React from 'react';
import { learningPaths } from '../data/learning-paths';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';

export const LearningPaths: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Learning Paths
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Structured learning paths to help you achieve your career goals
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {learningPaths.map((path) => (
          <div key={path.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img
                src={path.thumbnail}
                alt={path.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white text-lg font-semibold px-4 py-2 rounded-full border-2 border-white">
                  {path.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {path.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {path.courseCount} courses
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {path.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {path.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  {path.level.charAt(0).toUpperCase() + path.level.slice(1)}
                </span>
                <Link
                  to={`/paths/${path.id}`}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                >
                  View Path
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};