import { Input } from "@/components/ui/input";
import Container from "./components/Container";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pt-2 pb-20 gap-4" style={{fontFamily:'Verdana'}}>
      <main className="flex flex-col gap-4 row-start-2 w-[full]" >
        <Input className="px-2 py-5 text-xs w-[15.8rem]" type="text" placeholder="Search houses" style={{fontFamily:"Verdana, sans serif"}} />
        <Container />
      </main>
    </div>
  );
}
