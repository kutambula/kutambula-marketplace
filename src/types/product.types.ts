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
}

export interface FindProductsByOrgParams extends ListProductsParams {
  organizationId: string;
}