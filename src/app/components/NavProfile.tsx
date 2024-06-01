import Image from "next/image";
import React from "react";

export default function NavProfile() {
  return (
    <div className="flex items-center gap-4 ">
      <Image
        src="/women-dentist.png"
        alt="Women Dentist"
        width={46}
        height={46}
      />
      <div className="flex flex-col text-md border-r pr-4">
        <span className="font-bold">Dr. Jose Simmons</span>
        <span>General Practitoner</span>
      </div>
      <div className="pl-4 flex gap-2">
        <button>
          <Image src="/settings.svg" alt="Settings" width={16} height={16} />
        </button>
        <button>
          <Image
            src="/three-dots.svg"
            alt="More"
            className="w-2 h-6"
            width={16}
            height={16}
          />
        </button>
      </div>
    </div>
  );
}
