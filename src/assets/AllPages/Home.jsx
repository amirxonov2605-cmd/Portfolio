import Bottom from "./Bottom_first/ThatsMe";
import Mid_first from "./Middle_first/middle_first";
import Mid_second from "./Middle_second/Middle_second";
import Top from "./Top/Top";
import ThatsMe from "./Bottom_first/ThatsMe.jsx";
import Experience from "./Bottom_first/Experience.jsx";




export default function Home() {
  return (
    <>
      <Top />
      <Mid_first />
      <Mid_second />
      <Bottom />
      
      <Experience />
    </>
  );
}
