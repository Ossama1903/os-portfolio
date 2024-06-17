"use client";
import { useState, useEffect, useRef } from "react";

interface Command {
  command: string;
  directory: string;
}

export default function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [directoryPath, setDirectoryPath] = useState("user@macbook ~ %");

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [commandHistory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      executeCommand();
    }
  };

  const executeCommand = () => {
    if (
      inputValue.toLowerCase() === "cls" ||
      inputValue.toLowerCase() == "clear"
    ) {
      setCommandHistory([]);
    } else {
      setCommandHistory([
        ...commandHistory,
        { directory: directoryPath, command: inputValue },
      ]);
    }
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
      <div
        ref={scrollRef}
        className="h-full bg-gray-800 p-2 rounded-b-lg overflow-auto custom-scrollbar"
      >
        {commandHistory.map((command, index) => (
          <div key={index} className="text-white flex flex-wrap">
            <span>{command.directory}</span>
            <textarea
              defaultValue={command.command.trim()}
              readOnly
              className="flex-1 text-yellow-200 bg-transparent border-none focus:outline-none resize-none ml-2 overflow-hidden"
              style={{ minHeight: "1.5rem" }}
            />
          </div>
        ))}
        <div className="text-white flex flex-wrap">
          <span>{directoryPath}</span>
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
