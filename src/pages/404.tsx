import { Link } from "react-router-dom"
import * as style from "./404.css"

const formatPathToTitle = (path: string) =>
  `${path[0].toUpperCase()}${path.slice(1)}`.replace("-", " ")

type PathMap = Record<string, Record<string, string>>
const pathMap = Object.keys(import.meta.globEager("/src/pages/**/[a-z[]*.tsx"))
  .map((path) =>
    path
      .replace(/\/src\/pages|index|\.tsx$/g, "")
      .replace(/^\/|\/$/g, "")
      .split("/"),
  )
  .reduce(
    (acc, [part, ch]) =>
      ({
        ...acc,
        [formatPathToTitle(part)]: {
          ...acc[formatPathToTitle(part)],
          [formatPathToTitle(ch)]: `/${part}/${ch}`,
        },
      } satisfies PathMap),
    {} as PathMap,
  )

const Home = () => {
  console.log(pathMap)
  return (
    <div className={style.body}>
      <ul className={style.ul}>
        {Object.entries<PathMap[string]>(pathMap).map(([part, chs]) => (
          <li key={part}>
            {part}
            <ul>
              {Object.entries(chs).map(([ch, path]) => (
                <li key={ch}>
                  <Link to={path}>{ch}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
