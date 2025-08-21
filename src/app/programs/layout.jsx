import Banner from "@/components/program/Banner";
import RightSidebar from "@/components/program/RightSidebar";

export const metadata = {
  title: "Programs",
};

export default function ProgramsLayout({ children }) {
  return (
    <>
      <Banner
        title="Programs Offered"
        subtitle="Explore our diverse range of technical and professional programs."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-5/7">{children}</div>
          <div className="w-full lg:w-2/7 border-t lg:border-t-0 lg:border-l border-gray-300 pl-0 lg:pl-6">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}
