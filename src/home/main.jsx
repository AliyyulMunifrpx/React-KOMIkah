

import Atas from "./atas";
import Bagaimana from "./bagaimana";
import Kartu from "./card";
import Dipercaya from "./dipercaya";
import FaqHome from "./faq";
import KataMereka from "./katamereka";
import Paket from "./paket";

const komikPopuler = [
  { 
    id: 1,
    nama: "Abuya Gufron",
    foto: "/komika/gufron.jpg",
    star: "300",
    ciriKhas: "Aku adalah penghenti pandemi virus korona",
    asal: "Jawa Barat",
    status: "populer",
  },
  {
    id: 2,
    nama: "Pandji Pragiwaksono",
    foto: "/komika/pandji.jpg",
    star: "279",
    ciriKhas: "Sosial, politik, nasionalisme",
    asal: "Jakarta",
    status: "populer",
  },
  {
    id: 3,
    nama: "Ernest Prakasa",
    foto: "/komika/ernest.jpg",
    star: "270",
    ciriKhas: "Isu minoritas, keluarga, self-deprecating",
    asal: "Jakarta",
    status: "populer",
  },
  {
    id: 4,
    nama: "Dodit Mulyanto",
    foto: "/komika/dodit.jpg",
    star: "269",
    ciriKhas: "Absurd, violin, gaya kikuk",
    asal: "Blitar",
    status: "populer",
  },
  {
    id: 5,
    nama: "Bintang Emon",
    foto: "/komika/bintang.jpg",
    star: "250",
    ciriKhas: "Satire sosial, gaya ngomong santai tapi nyelekit",
    asal: "Jakarta",
    status: "populer",
  },
  {
    id: 6,
    nama: "Kiky Saputri",
    foto: "/komika/kiky.jpg",
    star: "240",
    ciriKhas: "Roasting pejabat, ceplas-ceplos",
    asal: "Garut",
    status: "populer",
  },
];

export default function Beranda() {
  return (
    <div className="w-full bg-no-repeat ">
       <Atas></Atas>

      <Kartu data={komikPopuler}></Kartu>
      <Bagaimana></Bagaimana>
      <Dipercaya></Dipercaya>
      <KataMereka></KataMereka>
      <Paket></Paket>
      <FaqHome></FaqHome>

    </div>
  );
}
