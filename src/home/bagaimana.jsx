export default function Bagaimana() {
  return (
    <><div className="flex jusify-center flex-col items-center py-30">
      <div className="flex justify-center items-center">
        <p className="text-xl text-putih font-poppins">
          Bagaimana Ini
          <span className="font-arsenica font-bold text-kuning"> Bekerja?</span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-3 mt-20  bg-ungu/30  rounded rounded-2xl py-10 px-10">
       <p className="text-kuning font-medium font-poppins">1 Memilih Komika</p>
       <div className="border border-1 border-putih/30 w-30 "></div>
       <p className="text-kuning font-medium font-poppins">2 Menentukan Jadwal</p>
       <div className="border border-1 border-putih/30 w-30 "></div>
       <p className="text-kuning font-medium font-poppins">3 Memuji Bos Kami Ganteng</p>
       <div className="border border-1 border-putih/30 w-30 "></div>
       <p className="text-kuning font-medium font-poppins">4 Konfirmasi Booking</p>
      </div>
   </div>
    </>
  );
}
