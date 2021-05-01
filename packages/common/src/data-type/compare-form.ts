export type CompareForm = {
  personal?: Personal;
  address?: Address;
};

export type Personal = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
};

export type Address = {
  streetNumber: string;
  streetName: string;
  streetType: typeof streetTypes[number];
  suburb: string;
  postcode: string;
};

export const streetTypes = [
  "CI", "Ct", "St", "PI", "Ave",
]
