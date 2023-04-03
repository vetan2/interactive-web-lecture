import { Link } from "react-router-dom"
import { ul } from "./404.css"

const Home = () => {
  return (
    <div>
      <ul className={ul}>
        <li>Part 01</li>
        <ul>
          <li>
            <Link to="/part-01/ch-02">Ch 02</Link>
          </li>
        </ul>
      </ul>
    </div>
  )
}

export default Home
