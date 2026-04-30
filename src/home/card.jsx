import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Kartu({ data }) {
  return (
    <>
      <div className="flex justify-center items-center gap-3 px-40">
        <p className="text-xl text-putih font-poppins">
          Komika
          <span className="font-arsenica font-bold text-kuning">
            {" "}
            Terpopuler
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 px-10">
        {data.map((kp) => {
          return (
            <Card key={kp.id} className="relative mx-auto w-90 h-full pt-0 flex flex-1 bg-ungu/20">
              <div className="absolute inset-0 aspect-video bg-black/35" />
              <img
                src={kp.foto}
                className="relative z-20 brightness-60 w-full object-top h-70 object-cover grayscale"
              />
              <CardHeader>
                <CardAction>
                  <div className="flex">
                    <img src="/hype.png" alt="" className="h-6 w-6 mr-1" />
                    <p className="text-kuning font-poppins">{kp.star}</p>
                  </div>
                </CardAction>
                <CardTitle className="text-putih">{kp.nama}</CardTitle>
                <CardDescription className="text-putih/50">
                  {kp.ciriKhas}
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto bg-hitam/0 border border-none">
                <Button className="w-full bg-kuning text-hitam rounded rounded-3xl hover:bg-orange hover:text-putih">
                  Lihat Detail
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
      <div className="flex mt-10 justify-center">
        <Link
          to="/komika"
          className="font-poppins text-xl text-putih  w-70 rounded rounded-xl border border-1 text-center"
        >
          Lihat Semua Komika
        </Link>
      </div>
    </>
  );
}
