import Image from "next/image";
import Particle from "@/app/components/Particle";
import "./globals.css";



export default function Home() {
  return (
      <main className={"flex items-center h-screen relative bg-[url('/assets/bg-explosion-4.png')] bg-cover bg-center"}>
          <div className={"absolute right-0 top-0 h-full w-[80%] z-[1]"}>
              <Particle />
          </div>
          <div className={"absolute right-10 md:right-10 lg:right-55 bottom-0 z-[1]"}>
          <Image
              src={"/assets/MoustacheMan-2.png"}
              alt={'MoustacheMan'}
              width={560}
              height={560}
              className={"z-[1] w-[270px] h-[300px] sm:w-[310px] sm:h-[350px] md:w-[330px] md:h-[360px] lg:w-[520px] lg:h-[560px]"}
          />
          </div>
          <Image
              src={"/assets/planet-1.png"}
              alt={'paint'}
              width={230}
              height={230}
              className={"z-[2] absolute left-[330px] top-0"}
          />
          <Image
              src={"/assets/planet-2.png"}
              alt={'paint'}
              width={130}
              height={130}
              className={"absolute left-[350px] top-[500px] md:left-[610px] md:top-[410px] lg:left-[900px] lg:top-[280px]"}
          />
          <Image
              src={"/assets/rocket-300.png"}
              alt={'paint'}
              width={170}
              height={1700}
              className={"z-[0] absolute left-[340px] top-[220px] md:left-[650px] md:top-[230px] lg:left-[650px] lg:top-[230px]"}
          />
          <Image
              src={"/assets/meteor-1.png"}
              alt={'paint'}
              width={142}
              height={380}
              className={"z-[2] absolute left-[260px] top-0"}
          />
          <Image
              src={"/assets/meteor-2.png"}
              alt={'paint'}
              width={129}
              height={425}
              className={"z-[2] absolute left-[250px] top-0"}
          />
          <Image
              src={"/assets/meteor-3.png"}
              alt={'paint'}
              width={129}
              height={425}
              className={"z-[2] absolute left-[350px] top-5"}
          />
          <div className={"max-w-[1500px] bg-gradient-to-r from-black via-transparent to-transparent p-10"}>
              <div
                  className={"max-w-[450px] md:max-w-[700px] flex flex-col gap-5 pl-5 pt-10 md:pl-20 lg:pl-40"}>
                  <h1 className={"z-[3] text-white text-[30px]  md:text-[45px] font-open-sans-light leading-tight md:mt-[100px]"}>
                      Запускаю сайты, которые покоряют цифровую вселенную
                  </h1>
                  <p className={"z-[3] text-transparent bg-text-gradient bg-clip-text text-[30px] md:text-[45px] font-open-sans-bold"}> Поднимаясь до звёзд</p>
                  <p className={"z-[3] text-[16px] text-gray-200 md:text-gray-400 mb-5 max-w-[500px]"}>
                      Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                      стандартной "рыбой" для текстов на латинице с начала XVI века.
                  </p>
                  <div className={"z-[3] relative w-[150px] h-[150px] md:w-[160px] mt-1"}>
                      <Image
                          src={"/assets/rounded-text.png"}
                          alt={'projects'}
                          width={160}
                          height={160}
                          className={"slow-spin"}
                      />
                  </div>
              </div>
          </div>
      </main>
  );
}
