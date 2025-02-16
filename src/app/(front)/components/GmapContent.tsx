import { use } from "react";
import { User } from "./LowerContent";

type ComProps = {
  proData: Promise<User[]>;
};
function GmapContent({ proData }: ComProps) {
  const data = use(proData);

  return <div>GmapContent {JSON.stringify(data)}</div>;
}

export default GmapContent;
