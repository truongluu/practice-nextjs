import { Suspense } from "react";
import GmapContent from "./GmapContent";
import { User } from "./LowerContent";

type Props = {
  promiseData: Promise<User[]>;
  page: number;
};
function Gmap({ promiseData, page }: Props) {
  return (
    <div>
      <Suspense key={`map${page}`} fallback={<div>Loading gmaps...</div>}>
        <GmapContent proData={promiseData} />
      </Suspense>
    </div>
  );
}

export default Gmap;
