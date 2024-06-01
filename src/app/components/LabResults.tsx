import React from "react";
import ColumnsTable from "./Table/ColumnsTable";
import { usePatientStore } from "../store/paitentStore";
import { Patient } from "../interfaces";

export default function LabResults() {
  const { getActivePatient } = usePatientStore();
  const patient = getActivePatient();
  if (!patient) {
    return <div>Please select a patient</div>;
  }
  const tableDatas = patient.lab_results.map((labResult) => {
    return {
      name: labResult,
    };
  });
  return (
    <ColumnsTable
      columnsData={[
        {
          Header: "",
          accessor: "name",
        },
      ]}
      tableData={tableDatas}
      title="Lab Results"
    />
  );
}
