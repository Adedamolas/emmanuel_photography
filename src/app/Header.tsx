import Link from "next/link";
import { photos } from "../../data/photos";

export default function Header() {
  const featuredPhotos = photos.slice(0, 3);

  return (
    <div className=" flex flex-col md:flex-row px-4 gap-10 items-center justify-between w-screen mx-auto mt-4">
      <div className="text-left mb-8 w-full md:w-1/2">
        <div className="mb-6">
          <h1 className="text-6xl md:text-[3rem] font-semibold -mt-2">
            HI THERE, I AM
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between items-start">
            <h1 className="text-5xl md:text-[5rem] font-semibold">EMMANUEL</h1>
            <span className="text-sm mt-2 md:mt-0">
              PHOTOGRAPHER FROM NIGERIA
            </span>
          </div>
          <h1 className="text-6xl md:text-[7rem] font-semibold -mt-2">
            ADEWUYI
          </h1>
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-4 w-full md:w-3/4">
            <div
              className="w-full h-[60vh] bg-gray-300 cursor-pointer bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/dsudloo9k/image/upload/v1743716613/DSC_0243art3_gdksr7.jpg')",
              }}
            ></div>

            <div className="flex flex-col gap-4 mt-4">
              <p className="font-medium">
                EVERY MOMENT IS A STORY, LET&apos;S HELP MAKE YOURS
                UNFORGETTABLE
              </p>
              <Link href={"/contact"}>
                <button className="p-6 bg-black text-white rounded-sm w-full md:w-3/4 border-2 hover:border-black hover:bg-transparent hover:text-black transition-colors">
                  BOOK A CALL
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
        {featuredPhotos.map((photo, index) => (
          <div
            key={index}
            className="w-full h-[75vh] bg-gray-300 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${photo.coverImage}')`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
