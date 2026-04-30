import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

// eslint-disable-next-line react-refresh/only-export-components
export const plans = [
  {
    id: "miskin",
    title: "Miskin",
    description:
      "Kalau lu miskin beli ini aja, daripada mahal mahal malah lari nanti repot gw.",
    benefits: [
      "1 komika, ambil yang lagi nganggur",
      "Tampil 45 menit, lebih dari itu bayar lagi",
      "Materi? Terserah komikanya, lu miskin anying",
      "Revisi brief? Haha tidak",
      "Kalau komika cancel, ya nasib (biasanya komikanya nemu klien yang lebih kaya dari elu)",
    ],
    buttonLabel: "Gw orang MISKIN",
    harga: "3.200.000",
  },
  {
    id: "kaya",
    title: "Kaya",
    description: "Kalau lu kaya beli ini aja, beli yang miskin = malu maluin.",
    benefits: [
      "2 komika pilihan sendiri",
      "Masing-masing tampil 1.5 jam",
      "1x revisi materi/brief",
      "Konsultasi 30 menit sebelum acara",
      "Ada komika cadangan kalau cancel",
    ],
    buttonLabel: "Gw orang kaya",
    harga: "5.200.000",
  },
  {
    id: "raja",
    title: "Yang Mulia",
    description:
      "Silahkan memilih paket ini yang mulia, anda akan kami ingat selama-lamanya.",
    benefits: [
      "Semua komika tersedia, pilih sesuka hati",
      "Durasi tampil? Terserah Yang Mulia",
      "Materi 100% custom sesuai keinginan",
      "Revisi unlimited, kami siap melayani",
      "Konsultasi kapanpun Yang Mulia berkenan",
      "Priority jadwal, acara lu yang utama",
      "Kalau komika cancel, kami carikan 2 penggantinya",
      "Nama acara lu kami promosikan di semua platform kami",
    ],
    buttonLabel: "Gw adalah raja",
    harga: "100.200.000",
  },
];

export default function Harga() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="my-20 flex flex-col items-center ">
          <p className="text-4xl font-bold text-[rgb(227,254,247)]">
            Pilih Paket
          </p>
        </div>
        <div className="flex gap-20">
          {plans.map((k) => {
            return (
              <div>
                {" "}
                <Card
                  size="sm"
                  className="mx-auto bg-hitam/10 flex flex-col min-w-sm max-w-sm h-full px-2"
                >
                  <CardHeader className="pt-1">
                    <h1 className="text-3xl font-bold text-putih">
                      {k.title}
                    </h1>
                    <CardDescription className="py-3 text-putih">
                      {k.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-2 flex flex-col flex-1">
                    {/*flex-1 buat menuhin card*/}
                    <ul className="list-disc pl-4 space-y-1 text-putih">
                      {k.benefits.map((b, i) => {
                        return <li key={i}>{b}</li>;
                      })}
                    </ul>
                    <p className="text-3xl text-putih mt-auto font-bold pt-3">
                      Rp{k.harga}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto bg-putih/0 border border-none">
                    <Button
                      variant="outline"
                      size="lg"
                      className="  w-full bg-kuning border border-none"
                    >
                      {k.buttonLabel}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}


