export interface CreateProductDTO {
  name: string;
  description?: string;
  category: string;
  tags: string[];
  images: string[];
  cover?: string;
  price: number;
  stockQuantity?: number;
  sku: string;
  expiresAt?: string;
  organizationId: string;
  // Campos opcionais adicionais do backend
  frete?: boolean;
  isPinned?: boolean;
  discount_percent?: number;
}

export interface ProductResponse {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  images: string[];
  cover: string;
  averageRating: number;
  ratingsCount: number;
  price: number;
  stockQuantity: number;
  sku: string;
  expiresAt: string | null;
  verified: boolean;
  createdAt: string;
  updatedAt: string;
  organizationId: string;
  // Campos adicionais do backend
  frete: boolean;
  isPinned: boolean;
  discount_percent: number;
  deletedAt: string | null;
}

export interface PaginatedProductResponse {
  data: ProductResponse[];
  total: number;
  page: number;
  lastPage: number;
}

export interface ListProductsParams {
  limit?: number;
  page?: number;
  verified?: boolean;
}

export interface FindProductsByOrgParams extends ListProductsParams {
  organizationId: string;
}