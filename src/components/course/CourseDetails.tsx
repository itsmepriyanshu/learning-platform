import React from 'react';
import { Clock, Users, Star, BookOpen, Award } from 'lucide-react';
import type { Course } from '../../types';
import { format } from 'date-fns';

interface CourseDetailsProps {
  course: Course;
}

export const CourseDetails: React.FC<CourseDetailsProps> = ({ course }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="relative h-96">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <span className="px-3 py-1 bg-indigo-600 rounded-full text-sm font-medium">
              {course.category}
            </span>
            <span className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium">
              {course.level}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1">{course.rating}</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5" />
              <span className="ml-1">{course.totalStudents.toLocaleString()} students</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5" />
              <span className="ml-1">{course.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-medium">{course.instructor.name}</p>
              <p className="text-sm text-gray-500">Instructor</p>
            </div>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Enroll Now - ${course.price}
          </button>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-4">About This Course</h2>
          <p className="text-gray-600 mb-6">{course.description}</p>

          <h2 className="text-xl font-semibold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-5 mb-6">
            {course.prerequisites.map((prerequisite, index) => (
              <li key={index} className="text-gray-600">{prerequisite}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mb-4">Course Content</h2>
          <div className="space-y-4">
            {course.chapters.map((chapter) => (
              <div key={chapter.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{chapter.title}</h3>
                  <span className="text-sm text-gray-500">{chapter.duration}</span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{chapter.content}</p>
                <div className="space-y-2">
                  {chapter.resources.map((resource) => (
                    <div key={resource.id} className="flex items-center text-sm">
                      <BookOpen className="h-4 w-4 text-gray-400 mr-2" />
                      <span>{resource.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Build real-world applications</span>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Master modern development tools</span>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Learn industry best practices</span>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-indigo-600 mr-2 mt-1" />
                <span>Get hands-on project experience</span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Course Updates</h2>
            <p className="text-gray-600">
              Last updated: {format(new Date(course.lastUpdated), 'MMMM d, yyyy')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};