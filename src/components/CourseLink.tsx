import CourseDefault from "../assets/course-default.jpeg";

export const CourseLink = ({ course }: any) => {
  return (
    <a href={course.link} target="_blank">
      <div className="flex p-3 border-2 hover:bg-blue-200">
        <img
          src={course.imageUrl || CourseDefault}
          height="100"
          width="100"
          alt="course-image"
        />
        <div className="m-2">
          <h3 className="text-2xl">{course.name}</h3>
          <p className="text-sm">{course.source || "unknown"}</p>
        </div>
      </div>
    </a>
  );
};
