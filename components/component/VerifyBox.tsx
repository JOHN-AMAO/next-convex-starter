"use client";
import Image from "next/image";
import React, { useState } from "react";

const VerifyBox = ({ type, src }: any) => {
  const [nostyle, onClickStyle] = useState("");
  return (
    <>
      <button onClick={() => onClickStyle("border-blue-800 border-4")}>
        <div
          className={`flex items-center justify-center ${nostyle} flex-col min-h-48 min-w-48 bg-white rounded-lg `}
        >
          <Image
            src={src}
            width={50}
            height={50}
            alt='looplearn verification image'
          />
          <h2 className='text-2xl text-blue-800'>{type}</h2>
        </div>
      </button>
    </>
  );
};

export default VerifyBox;
