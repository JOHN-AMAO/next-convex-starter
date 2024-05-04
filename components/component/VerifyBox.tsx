import Image from "next/image";
import React from "react";

const VerifyBox = ({ type, src }: any) => {
  return (
    <>
      <div className='flex items-center justify-center flex-col min-h-48 min-w-48 bg-white rounded-lg border-blue-800 border-2'>
        <Image
          src={src}
          width={50}
          height={50}
          alt='looplearn verification image'
        />
        <h2 className='text-2xl text-blue-800'>{type}</h2>
      </div>
    </>
  );
};

export default VerifyBox;
