'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

  const capstips: string[] = [
    "X3 0.5 Non Empty Cap",
    "X3 0.5 Empty Cap",
    "X3 0.5 Non Empty Tip",
    "X3 0.5 Empty Tip",
    "B2B 0.5 Cap Cob",
    "B2B 0.5 Tip Cob",
    "X3 0.5 Non Empty Crayola Tip",
    "X3 0.5 Non Empty Crayola Tip Cob",
    "X3 0.5 Empty Crayola Tip",
    "X3 0.5 Empty Crayola Tip Cob",
    "B2B 0.5 Empty Hi-Tip",
    "B2B 0.5 Non Empty Hi-Tip",
    "B2B Full Non Empty Cap",
    "B2B Full Empty Cap",
    "B2B Full Non Empty Tip",
    "B2B Full Empty Tip",
    "B2B Full Cap Cob",
    "B2B Full Tip Cob",
    "B2B Full Non Empty Crayola Tip",
    "B2B Full Non Empty Crayola Tip Cob",
    "B2B Full Empty Crayola Tip",
    "B2B Full Empty Crayola Tip Cob",
    "B2B Full Empty Hi-Tip",
    "B2B Full Non Empty Hi-Tip",
    "B2B 1.5 Non Empty Cap",
    "B2B 1.5 Empty Cap",
    "B2B 1.5 Non Empty Tip",
    "B2B 1.5 Empty Tip",
    "B2B 1.5 Non Empty Crayola Tip",
    "B2B 1.5 Empty Crayola Tip",
    "2.0 Non Empty Cap",
    "2.0 Empty Cap",
    "2.0 Non Empty Tip",
    "2.0 Empty Tip",
    "2.0 Cap Cob",
    "2.0 Tip Cob",
    "2.0 Non Empty Crayola Tip",
    "2.0 Non Empty Crayola Tip Cob",
    "2.0 Empty Crayola Tip",
    "2.0 Empty Crayola Tip Cob",
    "2.0 Empty Hi-Tip",
    "2.0 Non Empty Hi-Tip",
    "2.5 Non Empty Cap",
    "2.5 Empty Cap",
    "2.5 Non Empty Tip",
    "2.5 Empty Tip",
    "2.5 Non Empty Crayola Tip",
    "2.5 Non Empty Crayola Tip Cob",
    "2.5 Empty Crayola Tip",
    "2.5 Empty Crayola Tip Cob",
    "2.5 Empty Hi-Tip",
    "2.5 Non Empty Hi-Tip",
    "3.0 Non Empty Cap",
    "3.0 Empty Cap",
    "3.0 Non Empty Tip",
    "3.0 Empty Tip",
    "3.0 Cap Cob",
    "3.0 Tip Cob",
    "3.0 Non Empty Crayola Tip",
    "3.0 Non Empty Crayola Tip Cob",
    "3.0 Empty Crayola Tip",
    "3.0 Empty Crayola Tip Cob"
  ];
  

  const multis: string[] = [
    "X4 Empty Fulls",
    "X3 Full Cob",
    "X4 Fulls",
    "X7 0.5 reg",
    "X5 0.5 Empty",
    "X3 Full Crayola Cap",
    "X3 Full Empty Crayola Cap",
    "X3 Full Empty Crayola",
    "X3 Full Hi-Cap",
    "X3 Full Empty Hi-Cap",
    "X3 0.5 Crayola Bottom",
    "X3 Full Crayola Bottom",
    "X3 Empty 1.5",
    "B2B 1.5 cob",
    "X3 1.5 Reg",
    "B2B 1.5 Crayola Cap",
    "B2B 1.5 Empty Crayola Cap",
    "B2B 1.5 Empty Crayola",
    "B2B 1.5 Crayola Bottom",
    "B2B 1.5 Hi-Cap",
    "B2B 1.5 Empty Hi-Cap",
    "B2B 2.0 Empty",
    "B2B 2.0 cob",
    "B2B 2.0",
    "B2B 2.0 Crayola Cap",
    "B2B 2.0 Empty Crayola Cap",
    "B2B 2.0 Empty Crayola",
    "B2B 2.0 Hi-Cap",
    "B2B 2.0 Empty Hi-Cap",
    "B2B 2.5 Empty",
    "B2B 2.5 cob",
    "B2B 2.5",
    "B2B 2.5 Crayola Cap",
    "B2B 2.5 Empty Crayola Cap",
    "B2B 2.5 Empty Crayola",
    "B2B 2.5 Hi-Cap",
    "B2B 2.5 Empty Hi-Cap",
    "B2B 3.0 Empty",
    "B2B 3.0",
    "Empty 3.5",
    "3.5 cob",
    "3.5 Reg",
    "3.5 Crayola Cap",
    "3.5 Empty Crayola Cap",
    "3.5 Empty Crayola",
    "3.5 Crayola Bottom",
    "3.5 Hi-Cap",
    "3.5 Empty Hi-Cap",
    "Empty 4.0",
    "4.0 cob",
    "4.0 Reg",
    "4.0 Crayola Cap",
    "4.0 Empty Crayola Cap",
    "4.0 Empty Crayola",
    "4.0 Hi-Cap",
    "4.0 Empty Hi-Cap",
    "Empty 4.5",
    "4.5 Reg",
    "4.5 Empty Crayola",
    "Empty 5.0",
    "5.0 Reg"
  ];
  

  const stacks: string[] = [
    "2 Stack Hi-Tip",
    "B2B 2 Stack Cap",
    "B2B 2 Stack Tip",
    "X5 2 Stack",
    "X5 Empty 2 Stack",
    "X4 2 Stack Cob",
    "X4 2 Stack Hi-Cap",
    "X3 2 Stack Crayola Cap",
    "X3 Empty 2 Stack Crayola",
    "X3 2 Stack Crayola Bottom",
    "X4 3 Stack",
    "X4 Empty 3 Stack",
    "X3 3 Stack Cob",
    "X3 3 Stack Hi-Cap",
    "B2B 3 Stack Crayola Cap",
    "B2B Empty 3 Stack Crayola",
    "3 Stack Crayola Bottom",
    "X3 4 Stack",
    "X3 Empty 4 Stack",
    "X2 4 Stack Cob",
    "X2 4 Stack Hi-Cap",
    "4 Stack Crayola Cap",
    "B2B Empty 4 Stack Crayola",
    "4 Stack Crayola Bottom",
    "B2B 5 Stack",
    "B2B Empty 5 Stack",
    "B2B 5 Stack Cob",
    "B2B 5 Stack Hi-Cap",
    "5 Stack Crayola Cap",
    "Empty 5 Stack Crayola",
    "B2B 6 Stack",
    "B2B Empty 6 Stack",
    "B2B 6 Stack Cob",
    "B2B 6 Stack Hi-Cap",
    "7 Stack",
    "Empty 7 Stack",
    "7 Stack Cob",
    "7 Stack Hi-Cap",
    "8 Stack",
    "Empty 8 Stack",
    "Full 2 Stack Cap",
    "Full 2 Stack Tip",
    "B2B Full 2 Stack",
    "B2B Full Empty 2 Stack",
    "Full 2 Stack Cob",
    "Full 2 Stack Hi-Cap",
    "Full 2 Stack Crayola Cap",
    "Full Empty 2 Stack Crayola",
    "Full 2 Stack Crayola Bottom",
    "Full 3 Stack",
    "Full Empty 3 Stack",
    "Full 3 Stack Cob",
    "Full 3 Stack Hi-Cap",
    "Full 3 Stack Crayola Cap",
    "Full Empty 3 Stack Crayola",
    "Full 4 Stack",
    "Full Empty 4 Stack",
    "Full 4 Stack Cob",
    "Full 4 Stack Hi-Cap"
  ];
  
  const moms: string[] = [
    "Bottom On Bottom (Expo)",
    "Bottom On Bottom (Hi-Liters)",
    "Crayola Bottom On Bottom",
    "Expo Bottom On Hi-Liter Bottom",
    "Expo Cap on Hi Cap",
    "Empty Expo Cap on Hi Cap",
    "Expo Cap on Hi Cap Cob",
    "Expo Cap on Hi Bottom",
    "Empty Expo Cap on Hi Bottom",
    "Expo Cap on Hi Cap Bottom Cob",
    "Expo Tip on Hi Cap",
    "Empty Tip Cap on Hi Cap",
    "Expo Tip on Hi Cap Cob",
    "Expo Tip on Hi Bottom",
    "Empty Tip on Hi Bottom",
    "Expo Tip on Hi Bottom Cob",
    "Crayola Bottom On Hi-Bottom",
    "Hi-Bottom On Crayola Bottom",
    "Diagonal Cap On Cap",
    "Empty Diagonal Cap On Cap",
    "Diagonal Cap On Cap Cob",
    "Diagonal Cap on Singular Cap",
    "Empty Diagonal Cap On Singular Cap",
    "Diagonal Cap On Singular Cap Cob",
    "Crayola Bottom On Hi-Cap",
    "Hi-Cap On Crayola Bottom",
    "Crayola Cap on Hi-Cap",
    "Expo Bottom On Crayola Cap",
    "Crayola Cap On Expo Bottom",
    "Empty Crayola Cap On Expo Bottom",
    "Expo Bottom On Hi-Cap",
    "Hi-Cap On Expo Bottom",
    "Empty Hi-Cap On Expo Bottom",
    "Expo Bottom On Cob",
    "Cob On Expo Bottom",
    "Neon Bottom On Crayola Bottom",
    "Crayola Bottom On Neon Bottom",
    "Any Without Holding Marker On Marker (Your Choice)",
    "Cap On Cap…"
  ];
  

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [yourName, setYourName] = useState<string>("");
  const [opponentName, setOpponentName] = useState<string>("");
  const [showCopyButton, setShowCopyButton] = useState<boolean>(false);
  const [showGenerateButton, setShowGenerateButton] = useState<boolean>(true);

  const shuffleArray = (array: string[]): string[] => {
    return array.sort(() => 0.5 - Math.random());
  };

  const getRandomItems = (category: string[]): string[] => {
    const shuffled = shuffleArray(category);
    const itemCount = Math.floor(Math.random() * 4) + 1; 
    return shuffled.slice(0, itemCount);
  };

  const generateRound = () => {
    if (yourName.trim() === "" || opponentName.trim() === "") {
      alert("Please fill out both names.");
      return;
    }

    const selectedCapstips = getRandomItems(capstips);
    const selectedMultis = getRandomItems(multis);
    const selectedStacks = getRandomItems(stacks);
    const selectedMoms = getRandomItems(moms);

    let allSelectedItems = [
      ...selectedCapstips,
      ...selectedMultis,
      ...selectedStacks,
      ...selectedMoms,
    ];

    while (allSelectedItems.length < 10) {
      const remainingItems = [
        ...capstips.filter(item => !allSelectedItems.includes(item)),
        ...multis.filter(item => !allSelectedItems.includes(item)),
        ...stacks.filter(item => !allSelectedItems.includes(item)),
        ...moms.filter(item => !allSelectedItems.includes(item)),
      ];
      allSelectedItems.push(...shuffleArray(remainingItems).slice(0, 10 - allSelectedItems.length));
    }

    setSelectedItems(shuffleArray(allSelectedItems).slice(0, 10));
    setShowCopyButton(true)
    setShowGenerateButton(false);

    setTimeout(() => {
      setShowGenerateButton(true);
      setShowCopyButton(false);
    }, 60000);

  };

  const copyToClipboard = () => {
    const header = `${yourName} vs ${opponentName}\n\n`;
    const codeWord = "\n\nCode Word: To be generated by Meta AI 🤖";
    const textToCopy = header + selectedItems.join("\n") + codeWord;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((error) => {
        console.error("Could not copy text: ", error);
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <div className="font-bold font-mono">MARKER FLIP TOURNEY SEASON #2</div>
      <div className="">
        <Image src="/tourney-gen/tourney-pic.png" alt="tournament" width={50} height={50} />
      </div>
      <div className="flex flex-row gap-5 mt-5">
        <div className="flex flex-col items-center">
          <label htmlFor="your-name" className="block text-gray-700 font-bold font-mono mb-2 text-center">YOUR NAME</label>
          <input
            id="your-name"
            type="text"
            className="text-black text-center font-mono w-full p-2 border border-gray-300 rounded"
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="opponent-name" className="block text-gray-700 font-mono font-bold mb-2 text-center">OPPONENT NAME</label>
          <input
            id="opponent-name"
            type="text"
            className="text-black text-center font-mono w-full p-2 border border-gray-300 rounded"
            value={opponentName}
            onChange={(e) => setOpponentName(e.target.value)}
          />
        </div>
      </div>
      {showGenerateButton && (
        <button className="font-mono font-bold mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={generateRound}>
          GENERATE ROUND
        </button>
      )}
      {showCopyButton && (
        <button className="font-mono font-bold mt-8 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={copyToClipboard}>
          COPY MESSAGE
        </button>
      )}
      <div>
      </div>
    </main>
  );
}
