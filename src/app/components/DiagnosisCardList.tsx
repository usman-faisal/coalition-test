import React from "react";
import DiagnosisCard from "./DiagnosisCard";
import { usePatientStore } from "../store/paitentStore";
import Image from "next/image";

export default function DiagnosisCardList() {
  const { getActivePatient } = usePatientStore();
  const patient = getActivePatient();

  if (!patient) {
    return <div>Please select a patient</div>;
  }

  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 mt-4
    "
    >
      <DiagnosisCard
        icon={
          <Image
            src="/respiratory.svg"
            alt="Respiratory Rate"
            width={62}
            height={62}
          />
        }
        status="Normal"
        title="Respiratory Rate"
        value={patient.diagnosis_history[0].respiratory_rate.value + " bpm"}
        className="bg-blue "
      />
      <DiagnosisCard
        icon={
          <Image
            src="/temperature.svg"
            alt="Temperature"
            width={62}
            height={62}
          />
        }
        status="Normal"
        title="Temperature"
        value={patient.diagnosis_history[0].temperature.value + " °F"}
        className="bg-temperature"
      />
      <DiagnosisCard
        icon={
          <Image src="/heart.svg" alt="Heart Rate" width={62} height={62} />
        }
        status="Lower Than Average"
        title="Heart Rate"
        value={patient.diagnosis_history[0].heart_rate.value + " bpm"}
        className="bg-heart"
      />
    </div>
  );
}
