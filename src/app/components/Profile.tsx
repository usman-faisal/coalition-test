import Image from "next/image";
import React from "react";
import { usePatientStore } from "../store/paitentStore";

export default function Profile() {
  const { getActivePatient } = usePatientStore();
  const patient = getActivePatient();
  if (!patient) return <div>Please select a patient</div>;
  return (
    <aside className="py-8 px-8  bg-white rounded-3xl">
      <div className="flex px-20 flex-col items-center justify-center">
        <Image
          src={patient.profile_picture}
          alt={patient.name}
          width={100}
          height={100}
        />
        <div className="flex flex-col mt-2 ">
          <span className="font-bold text-3xl">{patient.name}</span>
        </div>
      </div>
      <div className="mt-8 px-8 space-y-8">
        <div className="flex gap-2">
          <Image src="/birth.svg" alt="Birth" width={24} height={24} />
          <div className="flex flex-col ml-2 ">
            <span className="">Date Of Birth</span>
            <span className="font-bold">{patient.date_of_birth}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="/gender.svg" alt="Female" width={24} height={24} />
          <div className="flex flex-col ml-2 ">
            <span className="">Gender</span>
            <span className="font-bold">{patient.gender}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="/phone.svg" alt="Phone" width={24} height={24} />
          <div className="flex flex-col ml-2 ">
            <span className="">Contact Info</span>
            <span className="font-bold">{patient.phone_number}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="/phone.svg" alt="Phone" width={24} height={24} />
          <div className="flex flex-col ml-2 ">
            <span className="">Emergency Contacts</span>
            <span className="font-bold">{patient.emergency_contact}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Image src="/insurance.svg" alt="Insurance" width={24} height={24} />
          <div className="flex flex-col ml-2 ">
            <span className="">Insurance Provider</span>
            <span className="font-bold">{patient.insurance_type}</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
