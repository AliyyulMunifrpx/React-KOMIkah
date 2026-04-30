
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="flex bg-hitam/0 backdrop-blur-sm z-50 w-full fixed top-0 justify-center items-center px-10 py-2">
        <div className="flex items-center mr-50">
        <img src="/matahari.png" className=" max-w-5 max-h-5 mr-2" alt=""/>
          <h1 className="font-bold my-1 font-poppins text-white">KOMIkah</h1>
        </div>
        <div className="flex my-1 text-putih gap-20 mx-20">
          <Link
            to="/home"
            className={
              useLocation().pathname === `/home` ? `  text-kuning px-3 py-1` : ` flex items-center justify-center`
            }
          >
            Beranda
          </Link>
          <Link
            to="/komika"
            className={useLocation().pathname === `/komika` ? ` text-kuning px-3 py-1` : ` flex items-center justify-center`}
          >
            Komika
          </Link>
          <Link
            to="/harga"
            className={useLocation().pathname === `/harga` ? ` text-kuning px-3 py-1` : ` flex items-center justify-center`}
          >
            Paket
          </Link>
          <Link
            to="/faq"
            className={useLocation().pathname === `/faq` ? ` text-kuning px-3 py-1` : ` flex items-center justify-center`}
          >
            FAQ
          </Link>
        </div>
        <div className="ml-30">
          <a href="" className="my-1 px-2 py-1 text-kuning bg-hitam/0 underline">
            Masuk & Booking Sekarang
          </a>
        </div>
      </div>
    </>
  );
}
