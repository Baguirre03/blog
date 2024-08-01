import { Link } from "react-router-dom";

export default function HomeLink() {
  return (
    <button className="button-submit">
      <Link to="/">Return Home!</Link>
    </button>
  );
}
