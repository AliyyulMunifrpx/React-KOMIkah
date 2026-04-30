const logo = [
  "/logo/1.png",
  "/logo/2.png",
  "/logo/3.png",
  "/logo/4.png",
  "/logo/5.png",
  "/logo/6.png",
  "/logo/7.png",
  "/logo/8.png",
  "/logo/9.png",
  "/logo/10.png",
  "/logo/11.png",
  "/logo/12.png",
  "/logo/13.png",
  "/logo/14.png",
  "/logo/15.png",
];
export default function Dipercaya() {
  return (
    <div className="flex justify-center flex-col items-center pb-30">
      <div className="flex justify-center items-center">
        <p className="text-xl text-putih font-poppins">
          Dipercayai
          <span className="font-arsenica font-bold text-kuning"> Oleh:</span>
        </p>
      </div>
      <div className="flex justify-center mt-20 gap-10">
        <img src="/toa.png" alt="" className="h-70 translate-y-400 translate-x-10 -rotate-20 ring-float"/> {/* pake minus sebelum translete untuk naik */}
        <div className="flex grid grid-cols-5 gap-10">
          {logo.map((lg, i) => {
            return <img key={i} src={lg} alt="" className="w-30 h-15" />;
          })}
        </div>
        <div className="w-70">
        <img src="/kerucut.png" alt="" className="ring-float translate-y-160 -translate-x-60 h-50"/>
        </div>
      </div>
    </div>
  );
}
