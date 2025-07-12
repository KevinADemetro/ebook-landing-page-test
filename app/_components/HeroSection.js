import Image from "next/image";
import heroBg from "@/public/herobg.jpeg";
import book from "@/public/book.png";

function HeroSection() {
  return (
    <section>
      <Image src={heroBg} alt="background" fill className="object-cover" />

      <section className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 grid-rows-[70vh] w-full z-20 p-30 ">
          <div className="px-20 flex flex-col justify-evenly items-center">
            <div>
              <h1 className="text-8xl mb-10 font-bold font-[family-name:var(--font-playfair-display)] leading-[1.3] ">
                Add your
                <br /> title here
              </h1>
              <h2 className="text-2xl font-[family-name:var(--font-lato)]">
                Subtitle with a supporting statement
              </h2>
            </div>
            <div>
              <button className="bg-[#f6a46b] px-15 py-5 block mx-auto font-[family-name:var(--font-lato)] text-white hover:bg-[#202730] hover:cursor-pointer">
                Download now
              </button>
            </div>
          </div>
          <div className="relative">
            <Image src={book} alt="book" fill className="object-contain" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
