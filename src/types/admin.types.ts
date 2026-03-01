export interface VerifyProductDTO {
  id: string;
  status: boolean;
}

export interface VerifyOrganizationDTO {
  id: string;
  status: boolean;
}

export interface VerifyProductResponse {
  id: string;
  name: string;
  verified: boolean;
  // Outros campos retornados pelo backend
}

export interface VerifyOrganizationResponse {
  id: string;
  name: string;
  verified: boolean;
  // Outros campos retornados pelo backend
}
