import React from 'react';

interface HeadingProps {
  semiHeader?: string;
  mainHeader?: string;
}

export default function Heading({ semiHeader, mainHeader }: HeadingProps) {
  return (
    <section className="my-10 py-2">
      
        <div
          className="relative before:content-[''] before:absolute
          before:top-0 before:left-0 before:w-[10px] before:h-full
          before:bg-red-500 "

        >
          <div className="">
        {semiHeader && (
          <p className="text-md ps-5 text-red-600 mb-2">
            {semiHeader}
          </p>
        )}
        </div>
              </div>

        <div>
          <h2 className="text-xl font-bold text-black">{mainHeader}</h2>

        </div>
    </section>
  );
}
