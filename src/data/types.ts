export interface MeetingData {
  day: string;
  time: string;
  title: string;
  tags: string[];
  description: string;
  contact: string;
  location: string;
}

export type ApplicationSector = "Internal" | "External" | "Development";

export interface ApplicationSectorApplicationData {
  sector: ApplicationSector;
  departments: DepartmentApplicationData[];
}

export interface ApplicationPosition {
  position: string;
  positionDescription: string;
  closed: boolean;
}

export interface DepartmentApplicationData {
  /** Display name, e.g. "Quality Assurance". */
  department: string;
  applicationLink: string;
  departmentInitativesLink: string;
  applicationPositions: ApplicationPosition[];
}

export interface ApplicationData {
  applicationSectors: ApplicationSectorApplicationData[];
}
