import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[620px] ">
      <Image
        src="http://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt=""
      />
      <div className=" absolute top-1/2 w-full text-center">
        <p className=" text-sm sm:text-lg font-bold">
          Not sure where to go? Perfect.
        </p>
        <button className=" text-purple-500 font-bold bg-white px-10 py-4 shadow-md rounded-full my-3 hover:shadow-xl active:scale-90 transition duration-150">
          {"I'm flexible"}
        </button>
      </div>
    </div>
  );
}
