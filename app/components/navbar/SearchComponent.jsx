
"use client"




export default function SearchResult () {
// const searchParams= useSearchParams();
// console.log('search component')
//   const handleSearchSubmit=async(e)=>{
// e.preventDefault();
// const params= new URLSearchParams(searchParams);
// const term=e.target.term.value;
// console.log(term);
// let foundHotels;
// if (term) {

// params.set('search',term)
//   }
//   else{
//     params.delete("search");
//   }
  return (
    <div className="border-red-500 border-2" >
      This is search 
      <form>
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
};

