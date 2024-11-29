import React from 'react';
import { ArrowRight, BookOpen, Users, Award, Rocket, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Developer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "This platform transformed my career. The courses are practical and the community support is amazing."
    },
    {
      name: "Michael Chen",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      content: "The quality of instruction is outstanding. I've learned more here than in my formal education."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                Transform your future with online learning
              </h1>
              <p className="mt-6 text-xl">
                Access world-class education from leading instructors. Learn at your own pace and achieve your goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/courses"
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/signup"
                  className="border border-white text-white hover:bg-white hover:text-indigo-600 px-6 py-3 rounded-lg font-semibold text-center"
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why choose our platform?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to succeed in your learning journey
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="bg-indigo-600 rounded-full p-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Expert-led courses</h3>
                <p className="mt-4 text-gray-600">
                  Learn from industry experts and gain practical skills that matter
                </p>
              </div>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="bg-indigo-600 rounded-full p-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Community learning</h3>
                <p className="mt-4 text-gray-600">
                  Connect with peers and learn together in an engaging environment
                </p>
              </div>
            </div>

            <div className="relative p-6 bg-white rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div className="bg-indigo-600 rounded-full p-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Recognized certificates</h3>
                <p className="mt-4 text-gray-600">
                  Earn certificates that showcase your achievements to employers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              What our students say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of satisfied learners who have transformed their careers
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-200">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};