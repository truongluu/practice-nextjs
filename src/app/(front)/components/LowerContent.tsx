import { use } from "react";

export type User = {
  name: string;
};

const mockedData = [
  { name: "david" },
  { name: "mono" },
  { name: "hel" },
  { name: "lee" },
];
export const simulateFetching = (page: number): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockedData.slice(page - 1, 2));
    }, 2000);
  });
};

type ComProps = {
  proData: Promise<User[]>;
};
function LowerContent({ proData }: ComProps) {
  const data = use(proData);
  return <div>LowerContent {JSON.stringify(data)}</div>;
}

export default LowerContent;
