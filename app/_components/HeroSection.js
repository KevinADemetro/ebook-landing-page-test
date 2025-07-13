import Image from "next/image";
import heroBg from "@/public/herobg.jpeg";
import book from "@/public/book.png";

function HeroSection() {
  return (
    <section>
      <Image src={heroBg} alt="background" fill className="object-cover" />

      <section className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="grid sm:grid-cols-2 sm:grid-rows-[70vh] w-full z-20 sm:p-30 ">
          <div className="mb-5 sm:mb-0 sm:px-20 flex flex-col justify-evenly items-center text-center">
            <div>
              <h1 className="text-3xl sm:text-8xl mb-10 font-bold font-[family-name:var(--font-playfair-display)] leading-[1.3] ">
                Add your title here
              </h1>
              <h2 className="text-2xl font-[family-name:var(--font-lato)] mb-5 sm:mb-0">
                Subtitle with a supporting statement
              </h2>
            </div>
            <div>
              <button className="bg-[#f6a46b] px-15 py-5 block mx-auto font-[family-name:var(--font-lato)] text-white hover:bg-[#202730] hover:cursor-pointer ">
                Download now
              </button>
            </div>
          </div>
          <div className="relative h-[60vh]">
            <Image src={book} alt="book" fill className="object-contain" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
