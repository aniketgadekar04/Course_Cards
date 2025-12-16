import { useState } from "react";
import Card from "./Card";

function Cards({ courses }) {
  // courses ke andar nested array hai to sabse pehle use simple karenge means ek single array me convert karenge. key values pair me to usme se hum sirf ab values ko lenge.

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    let allCourses = [];

    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
          key={course.id}
          course={course}
        ></Card>
      ))}
    </div>
  );
}

export default Cards;
