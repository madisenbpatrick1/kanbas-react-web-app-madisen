import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Lab5() {
  console.log("remote",REMOTE_SERVER);
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a
          href={`${REMOTE_SERVER}/lab5/welcome`}
          className="list-group-item"
        >
          Welcome
        </a>
      </div>
      <EnvironmentVariables />
      <hr />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <div className="list-group">
        <a
          href={`${REMOTE_SERVER}/lab5/module`}
          className="list-group-item"
        >
          Get Module
        </a>
      </div>
      <div className="list-group">
        <a
          href={`${REMOTE_SERVER}/lab5/module/name`}
          className="list-group-item"
        >
          Get Module Name
        </a>
      </div>
      <hr/>
      <WorkingWithArrays />
    </div>
  );
}
