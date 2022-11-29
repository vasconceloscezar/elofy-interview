import { useEffect, useState } from "react";

export default function PalindromeChecker({ reloadLogin }) {
  const words = ["Anilina", "test", "cezar", "Arara", "Esse", "Reviver"];
  const [palindromeWords, setPalindromeWords] = useState([]);
  const [notPalindromeWords, setNotPalindromeWords] = useState([]);

  useEffect(() => {
    const palindromeWords = [];
    const notPalindromeWords = [];
    for (const word of words) {
      const lowercaseWord = word.toLowerCase();
      const letters = lowercaseWord.split("");

      let wordTest = [];

      for (let x = letters.length; x > 0; x--) {
        wordTest.push(letters[x - 1]);
      }
      const reverseWord = wordTest.join("");

      if (lowercaseWord === reverseWord) {
        palindromeWords.push(lowercaseWord);
      } else {
        notPalindromeWords.push(lowercaseWord);
      }
    }
    setPalindromeWords(palindromeWords);
    setNotPalindromeWords(notPalindromeWords);
  }, []);
  return (
    <div className="w-screen h-screen sans-serif bg-e-primary flex justify-center items-center">
      <div>
        <h1>Palavras Palíndromas</h1>
        {palindromeWords.map((word) => (
          <div key={word} className="w-full">
            {word}
          </div>
        ))}
        <h1>Palavras Não Palíndromas</h1>
        {notPalindromeWords.map((word) => (
          <div key={word} className="w-full">
            {word}
          </div>
        ))}
      </div>

      <button onClick={() => reloadLogin()}>BACK</button>
    </div>
  );
}
