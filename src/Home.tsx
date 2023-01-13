import { useEffect } from "react";
import { CourseLink } from "./components/CourseLink";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { courses } from "./db/courses";
import { Course } from "./models/Course";

function Home() {
  async function getHello() {
    const response = await fetch("/.netlify/functions/hello");
    const helloMessage = await response.json();
    alert(helloMessage);
  }

  useEffect(() => {
    getHello();
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
