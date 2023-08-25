import { Misdemeanour } from "../../../types/misdemeanours.types";
//import { MisdemeanourKind } from "../../../types/misdemeanours.types";
interface MisdemeanourProps {
  misdemeanour: Misdemeanour;
}

const MisdemeanourList: React.FC<MisdemeanourProps> = ({ misdemeanour }) => {
  const amount = 50;
  const photo_width = 150;
  const photo_height = 50;
  const photo_URL = `https://picsum.photos/${photo_width}/${photo_height}?random=`;
  const randomNumber = Math.floor(Math.random() * amount);

  return (
    <tr className="text-left p-12 bg-gray-200">
      <td className="border border-slate-300">{misdemeanour.citizenId}</td>
      <td className="border border-slate-300">{misdemeanour.date}</td>
      <td className="border border-slate-300">
        {getMisdemeanourText(misdemeanour.misdemeanour)}
      </td>
      <td className="border border-slate-300">
        <img src={photo_URL + randomNumber} alt="image of punishment" />
      </td>
    </tr>
  );
};

const getMisdemeanourText = (misdemeanour: string) => {
  if (misdemeanour == "rudeness") return "Mild Public Rudeness 🤪";
  if (misdemeanour == "vegetables") return "Not Eating Your Vegetables 🥗";
  if (misdemeanour == "lift") return "Speaking in a Lift 🗣";
  if (misdemeanour == "united") return "Supporting Manchester United 😈";
  return "So bad, there are no words for it";
};

export default MisdemeanourList;
