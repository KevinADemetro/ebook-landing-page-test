import Image from "next/image";
import intro from "@/public/intro.jpeg";

function IntroSection() {
  return (
    <section className="bg-[#f6a46b] py-20 px-50 flex justify-evenly">
      <div className="relative h-[60vh] w-[100%]">
        <Image src={intro} fill alt="intro" className="object-contain" />
      </div>
      <div className="border-l border-black"></div>
      <div className="flex flex-col gap-20">
        <div>
          <h3 className="text-2xl font-bold mb-10 px-30">
            Introduce your idea
          </h3>
          <p className="px-30">
            Include a paragraph of text here that tells people more about your
            offer and why they should sign up for your emails or download your
            resource.
          </p>
        </div>

        <button className="bg-[#202730] px-15 py-5 block mx-auto font-[family-name:var(--font-lato)] text-white hover:bg-[white] hover:cursor-pointer hover:text-[#202730]">
          Download now
        </button>
      </div>
    </section>
  );
}

export default IntroSection;
