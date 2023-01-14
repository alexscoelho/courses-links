import { useEffect, useState } from "react";
import { CourseLink } from "./components/CourseLink";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Course } from "./models/Course";

async function getcourses() {
  const response = await fetch("/.netlify/functions/hello");
  return await response.json();
}

function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getcourses().then((courses) => setCourses(courses));
  }, []);

  return (
    <>
      <Header />
      {courses.map((course: Course) => (
        <CourseLink key={course.name} course={course} />
      ))}
      <Footer />
    </>
  );
}

export default Home;
