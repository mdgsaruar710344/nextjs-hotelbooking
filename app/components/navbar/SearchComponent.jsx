
"use client"

import { useRouter, useSearchParams } from "next/navigation";




export default function SearchResult () {
const searchParams= useSearchParams();
const router=useRouter();
console.log('search component')

  const handleSearchSubmit=(e)=>{
e.preventDefault();
const Currentparams= new URLSearchParams(searchParams);
const term=e.target.term.value;
console.log(term);
let foundHotels;
if (term) {

Currentparams.set('search',term)
  }
  else{
    Currentparams.delete("search");
  }
  router.push(`/?${Currentparams.toString()}`);
}
  return (
    <div className="border-red-500 border-2" >
   
      <form onSubmit={handleSearchSubmit}>
<div
          className="grid md:grid-cols-3 lg:grid-cols-7 gap-4 divide-x py-2 md:px-2 flex-grow"
        >
         
          <input
          name="term"
            type="text"
            placeholder="Where to?"
            className="px-3 bg-transparent focus:outline-none lg:col-span-3 placeholder:text-sm"
          />
        </div>
            
        <button type="submit"
          className="bg-primary w-9 h-9 rounded-full grid place-items-center text-sm text-center transition-all hover:brightness-90 shrink-0"
        >
         Search
        </button>
        </form>
    </div>
  );

}

