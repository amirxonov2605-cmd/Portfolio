import Bottom from "./Bottom_part/Bottom";
import Mid_first from "./Middle_first/middle_first";
import Mid_second from "./Middle_second/Middle_second";
import Top_part from "./Top_part.jsx/Top";

export default function Home() {
  return (
    <>
      <Top_part />
      <br />
      <hr />
      <Mid_first />
      <br />
      <hr />
      <Mid_second />
      <br />
      <hr />
      <Bottom />
    </>
  );
}
