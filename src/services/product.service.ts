import api from "../utils/api.utils";
import type {
    CreateProductDTO,
    ProductResponse,
    PaginatedProductResponse,
    ListProductsParams,
    FindProductsByOrgParams
} from "../types/product.types";

export const productService = {
    async createProduct(product: CreateProductDTO): Promise<ProductResponse> {
        const response = await api.post("/product/new", product);
        return response.data;
    },

    async getProductById(id: string): Promise<ProductResponse> {
        const response = await api.get(`/product/${id}`);
        return response.data;
    },

    async listProducts(params?: ListProductsParams): Promise<PaginatedProductResponse> {
        const response = await api.get("/product/list", { params });
        return response.data;
    },

    async findProductsByOrg(params: FindProductsByOrgParams): Promise<PaginatedProductResponse> {
        const { organizationId, ...rest } = params;
        const response = await api.get(`/product/find/${organizationId}`, { params: rest });
        return response.data;
    }
}