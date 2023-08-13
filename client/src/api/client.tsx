/*const baseUrl = "http://localhost:8080/api";
import {
	JustTalk,
	JUST_TALK,
	Misdemeanour,
	MisdemeanourKind,
	MISDEMEANOURS,
} from '../../types/misdemeanours.types';
import React, { useState } from 'react';  */

export const MisdemeanoursContext = React.createContext<number[]>([]);

/* one fetch version
const fetchData = async () => {
  const res = await fetch(baseUrl + "/misdemeanours/");
  const data = await res.json();
  console.log(data);
};*/

/* A different version of the above function */
/* const client = await fetch(
    `http://localhost:8080/api/misdemeanours/${numMisdemeanours}`
  );
  const json = (await apiResponse.json()) as { data: Misdemeanour[] };
  setCharacters(json.data);
};
  getMisdemeanours(numMisdemeanours);
}, [numMisdemeanours]);

export default client; */
