import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and deploy them to the cloud.',
    instructor: {
      id: '1',
      name: 'Dr. Angela Yu',
      email: 'angela@example.com',
      role: 'instructor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    },
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    category: 'Web Development',
    level: 'beginner',
    price: 99.99,
    rating: 4.8,
    totalStudents: 150000,
    duration: '63 hours',
    lastUpdated: '2024-03-15',
    prerequisites: ['Basic computer skills', 'No coding experience required'],
    chapters: [
      {
        id: '1-1',
        title: 'Introduction to Web Development',
        duration: '2 hours',
        content: 'Overview of web development and course structure',
        resources: [
          {
            id: '1-1-1',
            type: 'pdf',
            title: 'Course Overview',
            url: '/resources/course-overview.pdf',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'Machine Learning A-Z',
    description: 'Learn Machine Learning from scratch. Master Data Preprocessing, Regression, Classification, Neural Networks, and Deep Learning.',
    instructor: {
      id: '2',
      name: 'Andrew Thompson',
      email: 'andrew@example.com',
      role: 'instructor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    thumbnail: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4',
    category: 'Data Science',
    level: 'intermediate',
    price: 129.99,
    rating: 4.9,
    totalStudents: 120000,
    duration: '44 hours',
    lastUpdated: '2024-03-10',
    prerequisites: ['Basic Python knowledge', 'Basic Mathematics'],
    chapters: [
      {
        id: '2-1',
        title: 'Data Preprocessing',
        duration: '3 hours',
        content: 'Learn how to prepare your data for machine learning',
        resources: [
          {
            id: '2-1-1',
            type: 'video',
            title: 'Introduction to Data Preprocessing',
            url: '/resources/data-preprocessing.mp4',
          },
        ],
      },
    ],
  },
];