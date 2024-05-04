"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

const TEXTS = [
  "schools",
  "businesses",
  "organizations",
  "government",
  "enterprises",
];
export function Landingpage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className='bg-white text-gray-800'>
      <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <a
          className='text-3xl font-bold text-[#6e5cff]'
          href='#'
        >
          looplearn
        </a>
        <div className='flex space-x-4'>
          <a
            className='hover:text-gray-600 transition-colors duration-200'
            href='#'
          >
            All Categories
          </a>
          <a
            className='hover:text-gray-600 transition-colors duration-200'
            href='#'
          >
            Our Solutions
          </a>
          <a
            className='hover:text-gray-600 transition-colors duration-200 flex items-center'
            href='#'
          >
            Pricing
            <ArrowDownIcon className='ml-1 h-4 w-4' />
          </a>
          <a
            className='flex items-center hover:text-gray-600 transition-colors duration-200'
            href='#'
          >
            Special Offers
            <FlameIcon className='ml-1 h-4 w-4 text-[#ffd700]' />
          </a>
        </div>
        <div className='flex space-x-4'>
          <Button
            className='bg-blue-400 text-white'
            variant='outline'
          >
            Login
          </Button>
          <Button
            className='bg-blue-500 text-white'
            variant='outline'
          >
            Sign up
          </Button>
        </div>
      </nav>
      <section className='bg-blue-600 pt-16 pb-32'>
        <div className='container mx-auto px-6 flex flex-col lg:flex-row items-center'>
          <div className='lg:w-1/2'>
            <Badge
              className='mb-4'
              variant='secondary'
            >
              Get Exclusive Offers <GiftIcon className='inline h-4 w-4 ml-1' />
            </Badge>
            <h1 className='text-6xl font-bold leading-tight '>
              All in one skill development platform for
            </h1>
            <h1 className='text-6xl font-bold leading-tight mb-4 text-white'>
              <TextTransition springConfig={presets.wobbly}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <p className='text-lg mb-4'>
              Our courses are carefully curated to provide you with the latest
              industry knowledge and expertise. We work with experts in their
              fields to ensure that our courses are up-to-date and relevant.
            </p>

            <Button variant='secondary'>Start by creating a school</Button>
          </div>
          <div className='lg:w-1/2 mt-12 lg:mt-0 flex justify-center'>
            <Image
              alt='Learning'
              className='max-w-md rounded-lg full'
              height='600'
              src='/looplearnstudents.jpg'
              width={600}
            />
          </div>
        </div>
      </section>
      <section className='bg-white py-20 text-center'>
        <div className='container mx-auto px-6'>
          <h2 className='text-5xl font-bold mb-2'>
            150+ <br /> FIELDS OF STUDY
          </h2>
          <div className='mt-6 mb-12'>
            <h3 className='text-3xl font-bold'>
              Choose what you want to learn with us!
            </h3>
            <p className='mt-4 text-lg'>
              We offer a vast range of courses on a variety of topics, so you
              can choose the ones that interest you the most.
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <PaintbrushIcon className='h-12 w-12 mx-auto mb-4' />
              <h4 className='text-xl font-semibold mb-2'>Design</h4>
              <p className='text-base'>
                Explore courses in UI/UX design, graphic design, and more.
              </p>
            </div>
            <div>
              <GripIcon className='h-12 w-12 mx-auto mb-4' />
              <h4 className='text-xl font-semibold mb-2'>Engineering</h4>
              <p className='text-base'>
                Dive into software engineering, mechanical engineering, and
                more.
              </p>
            </div>
            <div>
              <BarChartIcon className='h-12 w-12 mx-auto mb-4' />
              <h4 className='text-xl font-semibold mb-2'>Data</h4>
              <p className='text-base'>
                Master data analysis, machine learning, and big data.
              </p>
            </div>
            <div>
              <BotIcon className='h-12 w-12 mx-auto mb-4' />
              <h4 className='text-xl font-semibold mb-2'>Robotics</h4>
              <p className='text-base'>
                Learn about robotics, automation, and AI.
              </p>
            </div>
          </div>
          <Button className='mt-12'>Explore Course Library</Button>
        </div>
      </section>
      <footer className='bg-[#f1f3f5] py-8'>
        <div className='container mx-auto px-6 text-center'>
          <p className='text-base text-gray-600'>
            © 2023 Course.sus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ArrowDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 5v14' />
      <path d='m19 12-7 7-7-7' />
    </svg>
  );
}

function BarChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line
        x1='12'
        x2='12'
        y1='20'
        y2='10'
      />
      <line
        x1='18'
        x2='18'
        y1='20'
        y2='4'
      />
      <line
        x1='6'
        x2='6'
        y1='20'
        y2='16'
      />
    </svg>
  );
}

function BotIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M12 8V4H8' />
      <rect
        width='16'
        height='12'
        x='4'
        y='8'
        rx='2'
      />
      <path d='M2 14h2' />
      <path d='M20 14h2' />
      <path d='M15 13v2' />
      <path d='M9 13v2' />
    </svg>
  );
}

function FlameIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z' />
    </svg>
  );
}

function GiftIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect
        x='3'
        y='8'
        width='18'
        height='4'
        rx='1'
      />
      <path d='M12 8v13' />
      <path d='M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7' />
      <path d='M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5' />
    </svg>
  );
}

function GripIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle
        cx='12'
        cy='5'
        r='1'
      />
      <circle
        cx='19'
        cy='5'
        r='1'
      />
      <circle
        cx='5'
        cy='5'
        r='1'
      />
      <circle
        cx='12'
        cy='12'
        r='1'
      />
      <circle
        cx='19'
        cy='12'
        r='1'
      />
      <circle
        cx='5'
        cy='12'
        r='1'
      />
      <circle
        cx='12'
        cy='19'
        r='1'
      />
      <circle
        cx='19'
        cy='19'
        r='1'
      />
      <circle
        cx='5'
        cy='19'
        r='1'
      />
    </svg>
  );
}

function PaintbrushIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z' />
      <path d='M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7' />
      <path d='M14.5 17.5 4.5 15' />
    </svg>
  );
}
