import Image from "next/image";
import Navbar from "./componenets/Mazdoor/Navbar";
import Jobcard from "./componenets/Mazdoor/Jobcard";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Jobcard/>
      <Jobcard/>
      <Jobcard/>
      <Jobcard/>
      <Jobcard/>
      <Jobcard/>
    </div>
  );
}
