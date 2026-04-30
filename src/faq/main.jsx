import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// eslint-disable-next-line react-refresh/only-export-components
export const items = [
  {
    value: "item-1",
    trigger: "Kenapa ada Mama Gufron? apakah dia komika?",
    content:
      'ya, dia adalah komika favorit mimin, sekali dia ngomong "syududu" mimin pasti ngakak',
  },
  {
    value: "item-2",
    trigger: "Kenapa mimin GANTENG membuat ini?",
    content:
      "karena aku kesepian, gabut, dan ganteng",
  },
  {
    value: "item-3",
    trigger: "Kenapa pertanyaan di sini aneh aneh?",
    content:
      "lah makanya elu baca judulnya kocak, kesel gweh",
  },
  {
    value: "item-4",
    trigger: "Apakah mimin suka rasis?",
    content:
      "kalau nanya yang bener ya anj, dasar hitam",
  },
]

export default function Faq(){
    return <>
    <div className="items-center flex flex-col">
  
        <h1 className="text-4xl text-putih font-bold mb-30">Pertanyaan Aneh Orang Orang</h1>


       <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="max-w-lg bg-putih/0 px-10 py-10 rounded rounded-xl"
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="text-putih">{item.trigger}</AccordionTrigger>
          <AccordionContent className="text-putih/50">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  
        </div>
    </>
}