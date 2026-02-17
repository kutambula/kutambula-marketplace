
export interface CreateProductDTO {
  name: string;
  description?: string;
  category: string;
  tags: string[];
  images: string[];
  price: number;
  stockQuantity?: number;
  sku: string;
  expiresAt?: string;
  organizationId: string;
  userId?: string;
}

export interface CreateProductReturn {
  id: string;
  name: string;
  description?: string;
  category: string;
  tags: string[];
  images: string[];
  cover: string;
  price: number;
  stockQuantity: number;
  sku: string;
  expiresAt?: string;
  organizationId: string;
  userId?: string;
  createdAt: string;
  updatedAt: string;
}