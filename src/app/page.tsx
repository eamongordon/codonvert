'use client';

import Image from 'next/image'
import { translate } from './convert.js'
import { useState } from 'react';

export default function Home() {
  const [translatedResult, setTranslatedResult] = useState({
    translatedArray: [{
      codon: '',
      color: '',
      aminoAcid: ''
    }],
    textArray: [{
      codon: '',
      color: ''
    }]
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target.value;
    const result = translate(fieldValue);
    setTranslatedResult(result);
    console.log(translatedResult.translatedArray)
  }
  const handleInput2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldValue = e.target;
    const plainFieldValue = fieldValue.outerHTML.replace(/<[^>]+>/g, '');
    const result = translate(plainFieldValue);
    setTranslatedResult(result);
    console.log(plainFieldValue);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-montserrat">
      <div className="relative flex place-items-center">
        <Image
          className="dark:invert"
          src="/codonvert-ai2.svg"
          alt="Codonvert Logo"
          width={320}
          height={64}
          priority
        />
      </div>
      <div className= "font-display font-semibold">
        <h3>Convert any mRNA sequence to DNA.</h3>
      </div>
      <div className= "font-display">
        <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="codon" type="text" placeholder="Enter a Codon (e.g. AUG)" onChange={handleInput} />
      </div>
      <div className= "font-display">
        <p className="font-display text-3xl" contentEditable="false" onInput={handleInput2}>{
          translatedResult.textArray.map((item, index) => (
            <span key={`Text-${index}`} className={`text-[${item.color}]`}>{item.codon}</span>
          ))
        }</p>
      </div>
      <div className="flex space-x-4">
        {translatedResult.translatedArray.map((item, index) => (
          <button
            className={`font-display bg-[${item.color}] text-white font-bold py-2 px-4 rounded space-x-5`}
            type='submit'
            disabled={true}
            key={`Button-${index}`}
          >
            {item.aminoAcid}
          </button>
        ))}
      </div>
    </main>
  )
}
