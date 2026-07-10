export interface Doctor {
  _id: string;
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  availability: string[];
  description: string;
  hospital: string;
  location: string;
  fee: number;
  rating?: number;
}

export interface Booking {
  _id: string;
  userEmail: string;
  doctorName: string;
  patientName: string;
  gender: 'Male' | 'Female';
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
}

export interface Companion {
  id: number;
  name: string;
  photo: string;
  rating: number;
  experience_years: number;
  service_areas: string[];
  languages: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  role?: 'patient' | 'doctor' | 'admin';
}

export interface AppointmentInfo {
  doctorName: string;
  patientName: string;
  appointmentDate: string;
  appointmentTime: string;
}

export interface BookingFormData {
  patientName: string;
  gender: 'Male' | 'Female';
  phone: string;
  appointmentDate: string;
  appointmentTime: string;
}

export interface UpdateBookingData {
  patientName?: string;
  phone?: string;
  appointmentTime?: string;
}
