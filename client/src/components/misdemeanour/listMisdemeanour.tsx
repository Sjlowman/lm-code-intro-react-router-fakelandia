import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { LOCAL_API_BASE_URL } from "../../api/config/config";
//import { useParams, Link } from "react-router-dom";
import MisdemeanourList from "./displayMisdemeanour";
import { MisdemeanourKind } from "../../../types/misdemeanours.types";

interface Misdemeanour {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string; // stringified for easy sending via HTTP rather than storing the full Date object
}

const ListMisdemeanours: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const effectCalled = useRef<boolean>(false);
  const numberOfMisdemeanours = 10;

  //const { categoryId } = useParams();

  useEffect(() => {
    const fetchMisdemeanours = async () => {
      try {
        const response = await axios.get(
          LOCAL_API_BASE_URL + "/misdemeanours/" + numberOfMisdemeanours
        );
        setMisdemeanours(response.data.misdemeanours);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (effectCalled.current) return;
    fetchMisdemeanours();

    effectCalled.current = true;
  }, []);

  const getInitialState = () => {
    const value = "all";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  /* const displayMisdemeanours = misdemeanours.filter(
    (misdemeanour) => misdemeanour.misdemeanour == value
  );
  */

  const displayOrNot = (misdemeanour: Misdemeanour) => {
    if (value == "all") {
      return misdemeanour;
    } else if (misdemeanour.misdemeanour == value) {
      return misdemeanour;
    } else {
      return null;
    }
  };

  return (
    <section className="w-full">
      <div className="pt-5 pb-7 h-100 text-xl  text-center">
        These are the misdemeanours offloaded by our responsible citizens so
        far. Will you join them in confessing? It's very uplifting
      </div>
      <div className="px-12 flex flex-col gap-y-12;">
        <table className="table-fixed border-separate border border-slate-400">
          <caption className="font-bold text-2xl bg-gray-400 caption-top border border-slate-300">
            Fakelandia misdemeanours offloaded to date.
          </caption>
          <thead>
            <tr className="font-bold text-left p-12  bg-gray-400">
              <th className="border border-slate-300">Citizen Id:</th>
              <th className="border border-slate-300">Date:</th>
              <th className="border border-slate-300">
                {" "}
                <label htmlFor="filter"> Misdemeanour </label>
                <select
                  id="filter"
                  name="filter"
                  value={value}
                  onChange={handleChange}
                >
                  <option value="all"> All</option>
                  <option value="rudeness"> Mild Public Rudeness 🤪</option>
                  <option value="lift"> Speaking in a Lift 🗣</option>
                  <option value="vegetables">
                    Not Eating Your Vegetables 🥗
                  </option>
                  <option value="united">
                    Supporting Manchester United 😈
                  </option>
                </select>
              </th>
              <th className="border border-slate-300">Random Punishment:</th>
            </tr>
          </thead>
          <tbody>
            {misdemeanours.filter(displayOrNot).map((misdemeanour) => (
              <MisdemeanourList misdemeanour={misdemeanour} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListMisdemeanours;
