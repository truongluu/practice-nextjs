import { Suspense } from "react";
import LowerContent, { User } from "./LowerContent";

type Props = {
  promiseData: Promise<User[]>;
  page: number;
};
function SubComonent({ promiseData, page }: Props) {
  return (
    <div>
      <Suspense key={page} fallback={<div>Loading...</div>}>
        <LowerContent proData={promiseData} />
      </Suspense>
    </div>
  );
}

export default SubComonent;
