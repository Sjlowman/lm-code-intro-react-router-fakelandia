//import { useQuery } from "react-query"; May use React Query but trying to avoid using external libraries

//import client from "./client"; not sure why I had this?

//import "../../App.css"; Also don't kow why this was there
import { useFetchData } from "../../api/hooks/use_fetch_data";
import { outputFetchResult } from "../../api/utils/output_fetch_result"; /* The error code to text function */
import { Misdemeanour } from "../../../types/misdemeanours.types";
import { LOCAL_API_BASE_URL } from "../../api/config/config";
import {
  CitizenMisdemeanour,
  Misdemeanourdisplay,
} from "./OldmisdemeanourDisplay";
/* const [Misdemeanour, setMisdemeanours] = useState(0);  /*added from aliens project but I think it's covered elsewhere*/

function DisplayAllMisdemeanours() {
  const { data, error, isFetching, status } = useFetchData<Misdemeanour>(
    `${LOCAL_API_BASE_URL}/misdemeanours/1/`
  );

  /* This is the larger version, just get one field displaying first
  return (
    <div className="MisdemeanourList">

  <h1>
    {isFetching ? (
      "Fetching..."
    ) : (
<>
        {outputFetchResult(status, error, data, (data) => (

        <h3 className="p-3 text-center">Misdemeanours</h3>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Citizen ID</th>
                    <th>Misdemenour</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {misdemeanour && misdemeanour.map(user =>
                    <tr key={misdemeanour.citizenId}>
                        <td>{misdemeanour.misdemeanour} </td>
                        <td>{misdemeanour.date}</td>
                    </tr>
                )}
            </tbody>
        </table>
))}
      </>
    )}
  </h1>       
</div>
);
} */

  return (
    <div className="MisdemeanourList">
      <h1>
        {isFetching ? (
          "Fetching..."
        ) : (
          <>
            {outputFetchResult(status, error, data, (data) => (
              <data Misdemeanour citizenId={data.citizenId} />
            ))}
          </>
        )}
        <p>This is a bit of text</p>
      </h1>
    </div>
  );
}

export default DisplayAllMisdemeanours;
