import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { LOCAL_API_BASE_URL } from "../../api/config/config";
//import { useParams, Link } from "react-router-dom";
//import MisdemeanourList from "./displayMisdemeanour";
import { MisdemeanourKind } from "../../../types/misdemeanours.types";

interface Misdemeanour {
  citizenId: number;
  misdemeanour: MisdemeanourKind;
  date: string; // stringified for easy sending via HTTP rather than storing the full Date object
}

const ListMisdemeanours: React.FC = () => {
  const [misdemeanours, setMisdemeanours] = useState<Misdemeanour[]>([]);
  const effectCalled = useRef<boolean>(false);

  //const { categoryId } = useParams();

  useEffect(() => {
    const fetchMisdemeanours = async () => {
      try {
        const response = await axios.get(
          LOCAL_API_BASE_URL + "/misdemeanours/6"
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

  return (
    <section className="w-full">
      <div className="pt-5 h-100 text-2xl font-bold text-center">
        List of misdemeanours
      </div>
      <div className="flex flex-col gap-y-12;">
        <table>
          <thead>
            <tr className=" text-darkest font-bold text-center p-12">
              <th>Citizen Id:</th>
              <th>Misdemeanour:</th>
              <th>Date:</th>
            </tr>
          </thead>
          <tbody>
            {misdemeanours.map((misdemeanour) => {
              return (
                <tr>
                  <td>{misdemeanour.citizenId}</td>
                  <td>{misdemeanour.misdemeanour}</td>
                  <td>{misdemeanour.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListMisdemeanours;
