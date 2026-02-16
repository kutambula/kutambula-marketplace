export interface ProductReturn {
    data: ProductDataReturn[] | null | [];
    total: number;
    page: number;
    lastPage: number;
}

export interface ProductDataReturn {
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
    userId: string;
    frete: string
    discount_percent: number
}