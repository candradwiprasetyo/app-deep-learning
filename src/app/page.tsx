import SideNavbar from "@/components/SideNavbar";
import Documents from "@/components/Documents";
import Navbar from "@/components/Navbar";
import CreateReport from "@/components/CreateReport";

export default function Homepage() {
  return (
    <div className="flex w-full md:min-h-screen">
      <SideNavbar />
      <div className="flex-grow md:flex ml-[68px]">
        <Documents />
        <div className="flex-grow bg-tertiary flex flex-wrap">
          <div className="flex flex-col w-full">
            <Navbar title="Report Helper" />
            <CreateReport />
          </div>
        </div>
      </div>
    </div>
  );
}
