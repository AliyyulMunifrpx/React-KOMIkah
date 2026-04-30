import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const komen = [
  {
    nama: "Rojali Bin Nganggur",
    status: "miskin",
    komentar:
      "aku rela bekerja secara tidak masuk akal demi bisa mengundang mamah gufron, yah walaupun tetep kurang duitku",
  },
  {
    nama: "Raja Nainggolan",
    status: "yang mulia",
    komentar:
      "Subhanallah, komedian Mamah Gufron ini bukan sekadar lucu, beliau membuka cakrawala humor syariah yang mengguncang iman saya.",
  },
  {
    nama: "Sultan Parkiran Indomaret",
    status: "kaya",
    komentar:
      "Saya sudah booking banyak hiburan, tapi aura panggung Mamah Gufron ini beda. Sekali ngelucu, dompet saya auto sedekah.",
  },
  {
    nama: "Joko Widodo",
    status: "yang mulia",
    komentar:
      "Jujur saya meneteskan air mata. Baru kali ini ada komika yang bisa bikin saya ketawa sekaligus pengen tobat tanpa alasan jelas.",
  },
  {
    nama: "Encep Pinjol Lunasnt",
    status: "miskin",
    komentar:
      "Awalnya saya cuma numpang wifi tetangga buat nonton, tapi setelah lihat Mamah Gufron tampil, saya rela minjem lagi demi tiket VIP.",
  },
];
export default function KataMereka() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-putih font-poppins text-xl">
        Apa{" "}
        <span className="text-kuning font-arsenica font-bold text-2xl">
          Kata Mereka?
        </span>
      </p>
      <Carousel className="w-250 border border-none mt-10">
        <CarouselContent>
          {komen.map((k, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-ungu/0 h-30">
                  <CardContent className="flex items-center flex-col justify-center p-6">
                    <p className="text-putih font-poppins text-center">{k.komentar}</p>
                    <div className="flex justify-center items-center gap-5 mt-5">
                      <p className="text-putih/50 font-poppins">{k.nama}</p>
                      <p className="text-putih/50 font-poppins font-light italic">-{k.status}-</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
