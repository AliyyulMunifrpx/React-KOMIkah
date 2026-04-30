import {
    Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { items } from "@/faq/main";


export default function FaqHome() {
  return (
    <div className="items-center mt-30 flex flex-col">
      <p className="font-poppins text-lg mb-20 text-white">Pertanyaan Pertanyaan <span className="font-arsenica text-2xl text-kuning">Aneh</span></p>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="max-w-lg bg-ungu/0 rounded rounded-xl"
      >
        {items.map((item) =>{
            return <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger className="text-putih">
              {item.trigger}
            </AccordionTrigger>
            <AccordionContent className="text-putih/50">
              {item.content}
            </AccordionContent>
          </AccordionItem>
       
        })}
      </Accordion>
    </div>
  );
}
