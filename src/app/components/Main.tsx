"use client";
import { useEffect } from "react";
import MainLayout from "./MainLayout";
import PatientList from "./PatientList";
import { usePatientStore } from "../store/paitentStore";
import Profile from "./Profile";
import Loader from "./Loader";
import DiagnosisHistory from "./DiagnosisHistory";
import ColumnsTable from "./Table/ColumnsTable";
import DiagnosticList from "./DiagnosticList";
import LabResults from "./LabResults";

export default function Main() {
  const { fetchPatients, loading } = usePatientStore();
  useEffect(() => {
    fetchPatients();
  }, []);
  if (loading) {
    return (
      <div className="mt-14 flex items-center justify center">
        <Loader />;
      </div>
    );
  }
  return (
    <MainLayout>
      <PatientList />
      <DiagnosisHistory />
      <Profile />
      <div></div>
      <DiagnosticList />
      <LabResults />
    </MainLayout>
  );
}
