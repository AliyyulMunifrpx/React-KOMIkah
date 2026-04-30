import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Atas() {
  return (
    <div className="flex pb-30 justify-center items-center w-full">
      <div>
      <div className="py-60 flex">
        <img
          src="/bubble.png"
          alt=""
          className="w-50 h-50 rotate-30 z-5 translate-x-70 translate-y-20 ring-float will-change-transform"
        />
        <div className="flex flex-col z-10 items-center">
          <img
            src="/matahari.png"
            alt=""
            className="max-w-5 muter max-h-5 mb-20 will-change-transform mt-10"
          />
          <p className="text-4xl font-poppins font-medium text-putih">
            Bikin acaramu
          </p>
          <p className="text-4xl font-poppins font-medium text-putih">
            jadi{" "}
            <span className="font-arsenica text-kuning font-bold">
              nggak terlupakan
            </span>
          </p>
        </div>
        <img
          src="/bubble2.png"
          alt=""
          className="w-50 h-50 rotate-30 z-15 ring-float -translate-x-77 translate-y-20 will-change-transform"
        />
        </div>
        <div className="flex text-putih justify-center items-center font-poppins mt-30">
          <div className="flex flex-col items-center">
            <p className="font-poppins font-bold text-putih text-2xl">30+</p>
            <p className="font-poppins text-putih font-normal">Komika</p>
          </div>
          <div className="h-10 border border-1 mx-10"></div>
          <div className="flex flex-col items-center">
            <p className="font-poppins font-bold text-putih text-2xl">500+</p>
            <p className="font-poppins text-putih font-normal">Acara</p>
          </div>
          <div className="h-10 border border-1 mx-10"></div>
          <div className="flex flex-col items-center">
            <p className="font-poppins font-bold text-putih text-2xl">98%</p>
            <p className="font-poppins text-putih font-normal">Puas</p>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-10">
          <Button className="rounded bg-kuning w-40 text-hitam px-2 rounded-2xl border hover:bg-hitam/0 hover:text-white hover:border-white">
            Booking Sekarang!
          </Button>
          <Link
            to="/komika"
            className="flex items-center justify-center rounded border border-white text-white w-40 px-2 bg-hitam/0 rounded-2xl hover:border-none hover:bg-kuning hover:text-hitam"
          >
            Komika
          </Link>
        </div>
      </div>
    </div>
  );
}
