import create from "zustand";
import { Patient } from "../interfaces";

interface PatientStore {
  patients: Patient[];
  addPatient: (patient: Patient) => void;
  loading: boolean;
  removePatient: (index: number) => void;
  fetchPatients: () => void;
  activePatient: Patient | null;
  setActivePatient: (patient: Patient) => void;
  setLoading: (loading: boolean) => void;
  getActivePatient: () => Patient | null;
}

export const usePatientStore = create<PatientStore>((set) => ({
  patients: [],
  activePatient: null,
  loading: true,
  setActivePatient: (patient) => set({ activePatient: patient }),
  addPatient: (patient) =>
    set((state) => ({ patients: [...state.patients, patient] })),
  removePatient: (index) =>
    set((state) => ({
      patients: state.patients.filter((_, i) => i !== index),
    })),
  setLoading: (loading: boolean) => set({ loading }),
  fetchPatients: () => {
    // set loading to true
    set({ loading: true });
    const auth = btoa(
      `${process.env.NEXT_PUBLIC_USERNAME}:${process.env.NEXT_PUBLIC_PASSWORD}`
    );
    fetch(process.env.NEXT_PUBLIC_BASE_URL ?? "", {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // set loading to false
        set({ loading: false });
        set({ patients: data });
      })
      .catch((e) => {
        console.log(e);
        // set loading to false
        set({ loading: false });
      });
  },
  getActivePatient: (): Patient | null => {
    const activePatient: Patient | null =
      usePatientStore.getState().activePatient;
    const patients: Patient[] = usePatientStore.getState().patients;
    const patient: Patient | undefined = activePatient
      ? activePatient
      : patients.find((patient: Patient) => patient.name === "Jessica Taylor");
    if (patient && !activePatient) set({ activePatient: patient });
    return patient ?? null;
  },
}));
