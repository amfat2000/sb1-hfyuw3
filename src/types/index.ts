export type AuthMethod = 'ID_CARD' | 'UAE_PASS';
export type ProductType = 'ACCOUNT_OPENING' | 'PERSONAL_FINANCE' | 'COVERED_CARD' | 'OTHER';
export type AccountType = 'CURRENT' | 'SAVINGS' | 'MINOR' | 'JOINT';

export interface CustomerInfo {
  fullName: string;
  nationality: string;
  idNumber: string;
  passportNumber: string;
  designation: string;
  email: string;
  salaryRange: string;
  mobileNumber: string;
}

export const PROHIBITED_COUNTRIES = ['Sudan', 'Afghanistan', 'Iran'];