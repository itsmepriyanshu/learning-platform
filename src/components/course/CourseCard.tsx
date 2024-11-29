import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import type { Course } from '../../types';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-900">
            ${course.price}
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-1 text-yellow-400 mb-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{course.rating}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {course.description}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.totalStudents} students</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};