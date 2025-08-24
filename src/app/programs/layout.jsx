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
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-[#fffaf2] via-white to-[#f7f1e6] overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ad4a16]/8 via-[#8f3a17]/5 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-[#8f3a17]/6 via-[#312518]/4 to-transparent blur-3xl"></div>
        </div>

        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-[1400px]">
          <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 xl:gap-16">
            {/* Main Content */}
            <div className="w-full xl:w-3/4">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-[#ad4a16]/10 p-6 sm:p-8 lg:p-10 xl:p-12">
                {children}
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full xl:w-1/4">
              <div className="sticky top-8">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
