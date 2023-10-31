import Image from "next/image";

const Guide = () => {
  return (
    <section className="flex-center flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" height={50} width={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50 ">
          We are here for you.
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide you to easy path.
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            reiciendis odio repellat mollitia provident rerum, aut possimus
            ratione iusto voluptate ipsa totam itaque quod laborum, dolore id
            quae ab dolores voluptas suscipit sed, ducimus vero? Molestias
            necessitatibus illum quo molestiae optio? Suscipit earum commodi
            repudiandae consectetur modi nam quia ut?
          </p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full" >
        <Image src="/boat.png" alt="boat" height={580} width={1440} className="w-full object-cover object-center 2xl:rounded-5xl" />
        <div className="absolute bg-white flex py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-ma md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientas</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>

              <p className="bold-20 mt-2 white-space-nowrap">
                Wonorejo pasurean
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
