import { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourses, setLikedCourses }) {
  // const [like, setLike] = useState(true);

  const para = course.description.substr(0, 100);

  function clickHandler() {
    // setLike(!like);
    // like ? toast.info("Liked") : toast.error("Disliked");

    if (likedCourses.includes(course.id)) {
      setLikedCourses((pre) => pre.filter((cid) => cid !== course.id));
      toast.warning("Like Removed");
    } else {
      if (likedCourses.id === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((pre) => [...pre, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className="w-[300px] bg-black bg-opacity-50 rounded-md overflow-hidden ">
      <div className="relative">
        <img src={course.image.url} alt="" />

        <div className="absolute grid place-items-center bg-white rounded-full w-[45px] h-[45px] top-38 left-60">
          <button onClick={clickHandler}>
            {
              /* like ? toast.info("Liked") : toast.error("Disliked"); */

              likedCourses.includes(course.id) ? (
                <FcLike fontSize={"2.20rem"}></FcLike>
              ) : (
                <FcLikePlaceholder fontSize={"2.20rem"}></FcLikePlaceholder>
              )
            }
          </button>
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-white pt-5 font-bold text-lg leading-6">
          {course.title}
        </h1>
        <p className="mt-4 text-white">
          {course.description.length > 100 ? para+'...': course.description}
        </p>
      </div>
    </div>
  );
}

export default Card;
