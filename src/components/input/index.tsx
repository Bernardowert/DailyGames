'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import { FiSearch } from "react-icons/fi";

export function Input(){
    const[input, setInput] = useState("");
    const router = useRouter();
   
    function handleSearch(e:FormEvent){
        e.preventDefault();
        console.log("Digitou: ", input);

        if(input === "") return; 
          
        router.push(`/game/search/${input}`);
    }

    return(
       <form 
        className="w-full bg-slate-200 flex items-center pr-2 gap-2 justify-between rounded-lg h-12"
        onSubmit={handleSearch}
        role="search"
        >
            <input
            type="text"
            className="flex-1/2 bg-transparent h-full pl-2 rounded-l-[inherit]"
            placeholder="Procurando algum jogo?..."
            name="input-search"
            required
            value={input}
            onChange={({target}) => setInput(target.value)}
            />
            <button aria-label="botão para buscar jogo digitado no input">
                <FiSearch size={24} color="#ea580c"/>
            </button>
        </form>
    )
}