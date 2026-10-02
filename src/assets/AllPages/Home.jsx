import Bottom from "./Bottom_part/Bottom";
import Mid_first from "./Middle_first/middle_first";
import Mid_second from "./Middle_second/Middle_second";
import Top from "./Top/Top";

export default function Home() {
  return (
    <>
      <Top />
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
