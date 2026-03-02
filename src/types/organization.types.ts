// DTOs - Data Transfer Objects
export interface CreateOrganizationDTO {
    businessName: string;
}

export interface ConfigureAccountDTO {
    accountType: 'personal' | 'business';
    businessName: string;
}

export interface UpdateOrganizationDTO {
    [key: string]: any;
}

// Response Types
export interface OrganizationResponse {
    id: string;
    name: string;
    slug: string;
    createdAt: string;
}

export interface ConfigureAccountResponse {
    id: string;
    name: string;
    slug: string;
    createdAt: string;
}

export interface UpdateOrganizationResponse {
    id: string;
    name: string;
    slug: string;
    [key: string]: any;
}

// Full Organization Data
export interface OrganizationData {
    id: string;
    category: string;
    averageRating: number;
    ratingsCount: number;
    _count: {
        products: number;
    };
    specialties: string[];
    name: string;
    logo: string;
    banner: string;
    description: string;
    verified: boolean;
}

// List Organization Response
export type ListOrganizationResponse = {
    data: OrganizationData[];
    total: number;
    page: number;
    lastPage: number;
} | OrganizationData[];
