import { Misdemeanour } from "../../../types/misdemeanours.types";
//import { MisdemeanourKind } from "../../../types/misdemeanours.types";

interface MisdemeanourProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourList: React.FC<MisdemeanourProps> = ({ misdemeanour }) => {
  return (
    <table>
      <tbody>
        <tr className=" text-darkest text-center p-4">
          <td>{misdemeanour.citizenId}</td>
          <td>{misdemeanour.misdemeanour}</td>
          <td>{misdemeanour.date}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MisdemeanourList;
