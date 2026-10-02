import Mid_first from "./Middle_first/middle_first";
import Mid_second from "./Middle_second/Middle_second";
import Top from "./Top/Top";
import Experience from "./Bottom_first/Experience.jsx";
import ThatsMe from "./Bottom_first/thatsme.jsx";
import BottomSecond from "./Bottom_second/BottomSecond.jsx";






export default function Home() {
  return (
    <>
      <Top />
      <Mid_first />
      <Mid_second />
      <ThatsMe/>
      <Experience />
      <BottomSecond />
    
    </>
  );
}
