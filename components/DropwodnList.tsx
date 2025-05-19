"use client";

import { useState } from "react";
import Image from "next/image";

const DropwodnList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src="/assets/icons/hamburger.svg"
              alt="hamburger"
              width={14}
              height={14}
            />
            Most recent
          </figure>
          <Image src="/assets/icons/arrow-down.svg" alt="arrow" width={20} height={20} />
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown">
            {['Most recent', 'Most liked'].map((option) => (
              <li key={option} className="list-item">
                <button
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
        </ul>

      )}
    </div>
  );
};

export default DropwodnList;
