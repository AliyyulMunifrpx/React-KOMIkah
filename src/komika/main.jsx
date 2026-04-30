import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const komikaAll = [
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
    ciriKhas: "Satire sosial, gaya santai tapi nyelekit",
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
  {
    id: 7,
    nama: "Coki Pardede",
    foto: "/komika/coki.jpg",
    star: "235",
    ciriKhas: "Dark jokes, absurd, roasting agama & sosial",
    asal: "Jakarta",
    status: "populer",
  },
  {
    id: 8,
    nama: "Tretan Muslim",
    foto: "/komika/muslim.jpg",
    star: "230",
    ciriKhas: "Logat Madura, receh cerdas, duo MLI",
    asal: "Madura",
    status: "populer",
  },
  {
    id: 9,
    nama: "Fico Fachriza",
    foto: "/komika/fico.jpg",
    star: "225",
    ciriKhas: "Ngaco, awkward, self roasting",
    asal: "Depok",
    status: "populer",
  },
  {
    id: 10,
    nama: "Raditya Dika",
    foto: "/komika/radit.jpg",
    star: "220",
    ciriKhas: "Observational comedy, kehidupan sehari-hari",
    asal: "Jakarta",
    status: "populer",
  },
  {
    id: 11,
    nama: "Arie Kriting",
    foto: "/komika/arie.jpg",
    star: "218",
    ciriKhas: "Timur, isu sosial, logat khas",
    asal: "Kendari",
    status: "populer",
  },
  {
    id: 12,
    nama: "Boris Bokir",
    foto: "/komika/boris.jpg",
    star: "210",
    ciriKhas: "Batak, keras, absurd keluarga",
    asal: "Medan",
    status: "populer",
  },
  {
    id: 13,
    nama: "Arafah Rianti",
    foto: "/komika/arafah.jpg",
    star: "205",
    ciriKhas: "Polos, deadpan, awkward humor",
    asal: "Depok",
    status: "populer",
  },
  {
    id: 14,
    nama: "Mongol Stres",
    foto: "/komika/mongol.jpg",
    star: "200",
    ciriKhas: "Ekspresif, hiperaktif, ceplas-ceplos",
    asal: "Manado",
    status: "populer",
  },
  {
    id: 15,
    nama: "Indra Frimawan",
    foto: "/komika/frimawan.jpg",
    star: "198",
    ciriKhas: "One liner, observasi receh, gaya santuy",
    asal: "Bandung",
    status: "populer",
  },
];

export default function Komika() {
  return (
    <div className="w-full my-30 flex flex-col justify-center items-center">
      <p className="text-4xl text-putih font-bold mb-20">Komika di KOMIkah</p>
      <div class="flex rounded-2xl ">
        <input
          type="search"
          id="search-dropdown"
          class=" px-3 py-1 rounded-l-[20px] border text-putih"
          placeholder="Cari komika"
          required
        />
        <button type="button" class="flex justify-center rounded-r-[20px] border bg-putih text-hitam items-center px-3">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-10">
        {komikaAll.map((kp) => {
          return (
            <Card
              key={kp.id}
              className="relative mx-auto w-90 h-full pt-0 flex flex-1 bg-ungu/20"
            >
              <div className="absolute inset-0 aspect-video bg-black/35" />
              <img
                src={kp.foto}
                className="relative z-20 brightness-60 w-full object-top h-70 object-cover grayscale"
              />
              <CardHeader>
                <CardAction>
                  <div className="flex"></div>
                </CardAction>
                <CardTitle className="text-putih">{kp.nama}</CardTitle>
                <CardDescription className="text-putih/50">
                  {kp.ciriKhas}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto bg-hitam/0 border border-none">
                <Button className="w-full bg-putih text-hitam rounded rounded-3xl hover:bg-orange hover:text-putih">
                  Lihat Detail
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex mt-10 justify-center"></div>
    </div>
  );
}
