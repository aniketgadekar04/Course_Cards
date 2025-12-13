import Card from "./Card";

function Cards({ courses }) {
  let allCourses = [];

  // courses ke andar nested array hai to sabse pehle use simple karenge means ek single array me convert karenge. key values pair me to usme se hum sirf ab values ko lenge.

  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };

  return (
    <div>
      {!courses ? (
        <div>
          <h1>No Data Found</h1>
        </div>
      ) : (
        getCourses().map((course) => {
          return <Card key={course.id} course={course}></Card>;
        })
      )}
    </div>
  );
}

export default Cards;
