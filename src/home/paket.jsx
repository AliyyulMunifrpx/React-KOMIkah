import { Button } from "@/components/ui/button";
import {
  Card,

  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import { plans } from "@/harga/main";
import {Link} from "react-router-dom"

export default function Paket() {
  return (
    <>
      <div className="flex justify-center items-center mt-20 gap-3 px-40">
        <p className="text-xl text-putih font-poppins">
          Pilihan
          <span className="font-arsenica font-bold text-2xl text-kuning">
            {" "}
            Paket
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-10">
        {plans.map((pl,i) => {
          return (
            <Card key={i}
                  size="sm"
                  className="mx-auto bg-kuning/10 flex flex-col min-w-sm max-w-sm h-full px-2"
                >
                  <CardHeader className="pt-1">
                    <h1 className="text-3xl text-center font-bold text-putih">
                      {pl.title}
                    </h1>
                    <CardDescription className="py-3 text-putih">
                      {pl.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="py-2 flex flex-col flex-1">
                    {/*flex-1 buat menuhin card*/}
                    <ul className="list-disc pl-4 space-y-1 text-putih">
                      {pl.benefits.map((b, i) => {
                        return <li key={i}>{b}</li>;
                      })}
                    </ul>
                    <p className="text-3xl text-putih mt-auto font-bold pt-3">
                      Rp{pl.harga}
                    </p>
                  </CardContent>
                  <CardFooter className="mt-auto bg-putih/0 border border-none">
                    <Button
                      variant="outline"
                      size="lg"
                      className="  w-full bg-kuning border border-none"
                    >
                      {pl.buttonLabel}
                    </Button>
                  </CardFooter>
                </Card>
          );
        })}
      </div>
      <div className="flex mt-10 justify-center">
          <Link to="/harga" className="font-poppins text-xl text-putih  w-70 rounded rounded-xl border border-1 text-center">
            Lihat Semua Paket
          </Link>
        </div>
    </>
  );
}
