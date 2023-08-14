import { Misdemeanour } from "../../../types/misdemeanours.types";
//import { MisdemeanourKind } from "../../../types/misdemeanours.types";

interface MisdemeanourProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourList: React.FC<MisdemeanourProps> = ({ misdemeanour }) => {
  const getMisdemeanourText = (misdemeanour: string) => {
    if (misdemeanour == "rudeness") return "Mild Public Rudeness 🤪";
    if (misdemeanour == "vegetables") return "Not Eating Your Vegetables 🥗";
    if (misdemeanour == "lift") return "Speaking in a Lift 🗣";
    if (misdemeanour == "united") return "Supporting Manchester United 😈";
    return "So bad, there are no words for it";
  };

  return (
    <tr className="text-left p-12 bg-gray-200">
      <td className="border border-slate-300">{misdemeanour.citizenId}</td>
      <td className="border border-slate-300">{misdemeanour.date}</td>
      <td className="border border-slate-300">
        {getMisdemeanourText(misdemeanour.misdemeanour)}
      </td>
      <td className="border border-slate-300">
        <img src="https://picsum.photos/50/50" />
      </td>
    </tr>
  );
};

export default MisdemeanourList;
