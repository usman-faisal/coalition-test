import React from "react";
import ColumnsTable from "./Table/ColumnsTable";
import { usePatientStore } from "../store/paitentStore";
const columnsData = [
  {
    Header: "NAME",
    accessor: "name",
  },
  {
    Header: "DESCRIPTION",
    accessor: "description",
  },
  {
    Header: "STATUS",
    accessor: "status",
  },
];
export default function DiagnosticList() {
  const { getActivePatient } = usePatientStore();
  const patient = getActivePatient();
  if (!patient) return <div>Please select a patient</div>;
  return (
    <ColumnsTable
      title="Diagnostic List"
      columnsData={columnsData}
      tableData={patient.diagnostic_list}
    />
  );
}
