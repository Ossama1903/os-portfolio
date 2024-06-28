"use client";
import { useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
import commands from "@/app/utils/commands";
import directories from "@/app/utils/directories";

interface Command {
  command: string;
  directory: string;
  response: string;
  color: string;
}

export default function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [commandHistory, setCommandHistory] = useState<Command[]>([]);
  const [directoryPath, setDirectoryPath] = useState("home");

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
    const trimmedInput = inputValue.trim();
    const commandParts = trimmedInput.split(" ");
    const baseCommand = commandParts[0].toLowerCase();

    if (!commands.includes(baseCommand)) {
      setCommandHistory([
        ...commandHistory,
        {
          directory: directoryPath,
          command: inputValue,
          response: `'${trimmedInput}' is not recognized as a valid command`,
          color: "text-red-500",
        },
      ]);
    } else if (
      trimmedInput.toLowerCase() === "cls" ||
      trimmedInput.toLowerCase() === "clear"
    ) {
      setCommandHistory([]);
    } else {
      if (trimmedInput.startsWith("cd ")) {
        const newPath = trimmedInput.slice(3).trim();
        console.log("current path", directoryPath);
        const possibleDirectories = Object.keys(
          directories[directoryPath] || {}
        );
        if (possibleDirectories.includes(newPath)) {
          setCommandHistory([
            ...commandHistory,
            {
              directory: directoryPath,
              command: inputValue,
              response: ``,
              color: "",
            },
          ]);
          setDirectoryPath((prev) => `${prev}/${newPath}`);
        } else {
          setCommandHistory([
            ...commandHistory,
            {
              directory: directoryPath,
              command: inputValue,
              response: `Cannot find path ${newPath} in the pwd`,
              color: "text-red-500",
            },
          ]);
        }
      } else {
        setCommandHistory([
          ...commandHistory,
          {
            directory: directoryPath,
            command: inputValue,
            response: "zaza",
            color: "text-yellow-200",
          },
        ]);
      }
    }

    setInputValue("");
  };

  return (
    <Draggable handle=".drag-handle">
      <div className="absolute top-10 left-10 w-[80%] h-[80%] rounded-lg shadow-lg">
        <div className="bg-black rounded-t-lg py-1 cursor-default drag-handle">
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
            <>
              <div key={index} className="text-white flex flex-wrap">
                <span>
                  user@macbook{" "}
                  {command.directory === "home"
                    ? "~"
                    : command.directory.split("/")[
                        command.directory.length - 1
                      ]}{" "}
                  %
                </span>
                <textarea
                  defaultValue={command.command.trim()}
                  readOnly
                  className="flex-1 text-yellow-200 bg-transparent border-none focus:outline-none resize-none ml-2 overflow-hidden h-[5px]"
                />
              </div>
              <span className={command.color}>{command.response}</span>
            </>
          ))}
          <div className="text-white flex flex-wrap">
            <span>
              user@macbook{" "}
              {directoryPath === "home"
                ? "~"
                : directoryPath.split("/")[
                    directoryPath.split("/").length - 1
                  ]}{" "}
              %
            </span>
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
    </Draggable>
  );
}
