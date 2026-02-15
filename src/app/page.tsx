import { Flag } from "@/registry/new-york/flags/components/flag";
import { flagList } from "@/registry/new-york/flags/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center justify-center gap-4 mb-8">
        <h1 className="text-2xl font-bold uppercase">Shadcn Flag Registry</h1>
        <p>See full documentation at here: <Link className="underline font-bold" href={"https://github.com/vorhdam/flags"}>Github</Link></p>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-20 gap-2">
        {flagList.map((flag) => (
          <div 
            key={flag} 
            className="flex items-center justify-center p-1 bg-zinc-900 rounded-2xl hover:bg-zinc-600 transition-colors aspect-square"
          >
            <Flag code={flag} width="48px" height="48px" />
          </div>
        ))}
      </div>
    </div>
  );
}