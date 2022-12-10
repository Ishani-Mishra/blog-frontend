import "./single.css";
import Sidebar from "../../atoms/sidebar/Sidebar";
import SinglePost from "../../atoms/singlePost/SinglePost";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}

