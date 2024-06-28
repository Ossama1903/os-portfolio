"use client";
import { useState } from "react";
import Draggable from "react-draggable";

export default function Contact() {
  const [to, setTo] = useState("sheikhusamabilal@gmail.com");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  return (
    <Draggable handle=".handle">
      <div className="w-[800px] bg-gray-300 rounded-lg shadow-lg absolute top-10 left-10">
        <div className="handle border-b py-2 px-4">
          <h5 className="font-semibold">New Message</h5>
        </div>
        <div className="p-4 bg-white rounded-b-lg">
          <div className="mb-4 flex items-center border-b bg-white border-gray-300">
            <h6 className="text-xs mt-1 text-gray-500">To</h6>
            <input
              placeholder="Recipients"
              type="text"
              value={to}
              disabled
              className="ml-1 mt-1 p-1 block w-full bg-white sm:text-sm"
            />
          </div>
          <div className="mb-4 flex items-center border-b bg-white border-gray-300">
            <h6 className="text-xs mt-1 text-gray-500">From</h6>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="ml-1 mt-1 p-1 block w-full bg-white sm:text-sm focus:outline-none"
            />
          </div>
          <div className="mb-4 flex items-center border-b bg-white border-gray-300">
            <h6 className="text-xs mt-1 text-gray-500">Subject</h6>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="ml-1 mt-1 p-1 block w-full bg-white sm:text-sm focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full h-40 bg-white sm:text-sm resize-none overflow-y-auto mail-custom-scrollbar focus:outline-none"
            />
          </div>
        </div>
      </div>
    </Draggable>
  );
}
