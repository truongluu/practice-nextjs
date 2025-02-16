import { simulateFetching } from "./LowerContent";

async function SerCom() {
  const data = await simulateFetching(1);
  return <div>Server com {JSON.stringify(data)}</div>;
}

export default SerCom;
