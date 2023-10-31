import Image from "next/image"


const Guide = () => {
  return (
    <section className="flex-center flex-col">
      <div className="border-2 border-red-500 padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" height={50} width={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50 ">We are here for you.</p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide you to easy path.</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem reiciendis odio repellat mollitia provident rerum, aut possimus ratione iusto voluptate ipsa totam itaque quod laborum, dolore id quae ab dolores voluptas suscipit sed, ducimus vero? Molestias necessitatibus illum quo molestiae optio? Suscipit earum commodi repudiandae consectetur modi nam quia ut?</p>
        </div>
      </div>
      <div className="flex-center max-container relative w-full border-2 border-blue-500">
        <Image src="/boat.png" alt="boat" width={1440} height={580}className="w-full object-cover object-center 2xl:rounded-5xl"/>
      </div>
    </section>
  )
}

export default Guide