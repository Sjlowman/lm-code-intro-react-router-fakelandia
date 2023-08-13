export type CitizenId = { citizenId: number };

export const CitizenMisdemeanour: React.FC<Misdemeanour> = ({ citizenId }) => (
  <div>{citizenId}</div>
);
