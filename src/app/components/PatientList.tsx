import Image from "next/image";
import { Patient } from "../interfaces";
import { usePatientStore } from "../store/paitentStore";

export default function PatientList() {
  const { patients, setActivePatient } = usePatientStore();
  function handleClick(patient: Patient) {
    setActivePatient(patient);
  }
  return (
    <aside className="bg-white sticky max-h-[65vh] h-auto overflow-y-scroll scrollbar-thin right-0 top-10 rounded-3xl px-20 py-10">
      <header className="px-2  ">
        <h2 className="text-4xl  font-bold">Patients</h2>
      </header>
      <ul
        className="mt-8 space-y-6  overflow-scroll overflow-x-hidden 
        scrollbar-thin
      "
      >
        {patients.map((patient: Patient, index: number) => (
          <li
            key={index}
            role="button"
            onClick={() => handleClick(patient)}
            className="flex items-center"
          >
            <Image
              src={patient.profile_picture}
              alt={patient.name}
              width={32}
              height={32}
            />
            <div className="flex flex-col ml-4">
              <span className="font-bold">{patient.name}</span>
              <span>
                {patient.gender}, {patient.age}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
