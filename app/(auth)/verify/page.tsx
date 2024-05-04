import VerifyBox from "@/components/component/VerifyBox";
import React from "react";

const page = () => {
  return (
    <>
      <div className='bg-blue-700 h-screen flex flex-col gap-4 justify-center items-center'>
        <div className=''>
          <h1 className='text-2xl'>Pick the option that best suits you:</h1>
        </div>
        <div className='flex flex-wrap gap-4 justify-center items-center'>
          <VerifyBox
            type='student'
            src='/student.png'
          />
          <VerifyBox
            type='school'
            src='/school.png'
          />
          <VerifyBox
            type='Business'
            src='/enterprise.png'
          />
          <VerifyBox
            type='Government'
            src='/government.png'
          />
        </div>
      </div>
    </>
  );
};

export default page;
