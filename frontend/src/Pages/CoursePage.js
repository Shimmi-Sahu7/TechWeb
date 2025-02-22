import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';  // Assume axios is already set up
import './CoursePage.css';

const CoursePage = () => {
  const { courseId } = useParams(); // Get the course ID from URL
  const [courseData, setCourseData] = useState(null);

  // Fetch course data from API
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(`/auth/courses/${courseId}`);
        setCourseData(response.data);
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    fetchCourseData();
  }, [courseId]);

  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="course-container">
      <header className="course-header">
        <h1>{courseData.title}</h1>
        <p>{courseData.description}</p>
      </header>

      <section className="course-videos">
        <h2>Course Videos</h2>
        <ol>
          {courseData.videos.map((video, index) => (
            <li key={index}>
              <a href={video.url} target="_blank" rel="noopener noreferrer">
                {video.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="course-pdfs">
        <h2>Course PDFs</h2>
        <ol>
          {courseData.pdfs.map((pdf, index) => (
            <li key={index}>
              <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                {pdf.title}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default CoursePage;
