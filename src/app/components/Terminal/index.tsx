"use client";
import { useState, useEffect, useRef } from "react";

export default function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // Execute your function here
      executeCommand();
    }
  };

  const executeCommand = () => {
    setCommandHistory([...commandHistory, inputValue]);
    setInputValue("");
  };

  return (
    <div className="absolute top-10 left-10 w-[80%] h-[80%] rounded-lg shadow-lg">
      <div className="bg-black rounded-t-lg py-1">
        <div className="flex py-2 px-1">
          <div className="w-3 h-3 bg-red-500 rounded-[50%] mx-1" />
          <div className="w-3 h-3 bg-yellow-500 rounded-[50%] mx-1" />
          <div className="w-3 h-3 bg-green-500 rounded-[50%] mx-1" />
        </div>
      </div>
      <div className="h-full bg-gray-800 p-2 rounded-b-lg overflow-auto">
        {commandHistory.map((command, index) => (
          <div key={index} className="text-white flex flex-wrap">
            <span>user@macbook ~ %</span>
            <textarea
              defaultValue={command.trim()}
              readOnly
              className="flex-1 text-yellow-200 bg-transparent border-none focus:outline-none resize-none ml-2 overflow-hidden"
              style={{ minHeight: "1.5rem" }}
            />
          </div>
        ))}
        <div className="text-white flex flex-wrap">
          <span>user@macbook ~ %</span>
          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 text-yellow-200 bg-transparent border-none focus:outline-none resize-none ml-2 overflow-hidden"
            style={{ minHeight: "1.5rem" }}
          />
        </div>
      </div>
    </div>
  );
}
