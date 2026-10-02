import Bottom from "./Bottom_first/Bottom-first";
import BottomSecond from "./Bottom_second/BottomSecond";
import Mid_first from "./Middle_first/middle_first";
import Mid_second from "./Middle_second/Middle_second";
import Top from "./Top/Top";

export default function Home() {
  return (
    <>
      <Top />
      <Mid_first />
      <Mid_second />
      <Bottom />
    </>
  );
}
