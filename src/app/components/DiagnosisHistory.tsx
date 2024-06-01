import { useState } from "react";
import { usePatientStore } from "../store/paitentStore";
import { getLineChartOptions } from "../utils/chartOptions";
import LineChart from "./Chart/LineChart";
import { BloodPressure } from "../interfaces";
import DiagnosisCardList from "./DiagnosisCardList";

export default function DiagnosisHistory() {
  const { getActivePatient } = usePatientStore();
  const patient = getActivePatient();
  const [filterValue, setFilterValue] = useState("last6Months");
  if (!patient) return <div>Please select a patient</div>;

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilterValue(e.target.value);
  }
  function getChartDataByDiagnosis(name: string) {
    if (!patient) return;
    if (filterValue === "all") {
      return patient.diagnosis_history
        .map((i) => i.blood_pressure[name as keyof BloodPressure].value)
        .reverse();
    }
    if (filterValue === "last6Months") {
      return patient.diagnosis_history
        .slice(-6)
        .map((i) => i.blood_pressure[name as keyof BloodPressure].value);
    }
    if (filterValue === "last1Year") {
      return patient.diagnosis_history
        .slice(-12)
        .map((i) => i.blood_pressure[name as keyof BloodPressure].value);
    }
  }
  return (
    <div className="bg-white p-12">
      <header className="mb-4">
        <h2 className="text-4xl font-bold">Diagnosis History</h2>
      </header>
      <div className="bg-chart rounded-3xl flex">
        <div className="flex-1">
          <div className="ml-auto">
            <select
              className="border border-gray-300 rounded-lg p-2"
              name="diagnosis"
              id="diagnosis"
              value={filterValue}
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="last6Months">Last 6 Months</option>
              <option value="last1Year">Last 1 Year</option>
            </select>
          </div>
          <LineChart
            chartOptions={getLineChartOptions(
              patient.diagnosis_history
                .map((i) => i.month + " " + i.year)
                .reverse()
            )}
            chartData={[
              {
                name: "Systolic",
                data: getChartDataByDiagnosis("systolic"),
              },
              {
                name: "Diastolic",
                data: getChartDataByDiagnosis("diastolic"),
              },
            ]}
          />
        </div>
        <div className="flex flex-col pr-8 gap-4 mt-12 w-[30%] ">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-pink"></div>
              <span className="text-gray-700">Systolic</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">
                {patient.diagnosis_history[0].blood_pressure.systolic.value}
              </span>
              <span className="text-gray-700">
                {patient.diagnosis_history[0].blood_pressure.systolic.value >
                120
                  ? "Higher than average"
                  : "LOwer than average"}
              </span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-purple"></div>
              <span className="text-gray-700">Diastolic</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">
                {patient.diagnosis_history[0].blood_pressure.diastolic.value}
              </span>
              <span className="text-gray-700">
                {patient.diagnosis_history[0].blood_pressure.diastolic.value >
                80
                  ? "Higher than average"
                  : "Lower than average"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <DiagnosisCardList />
    </div>
  );
}
