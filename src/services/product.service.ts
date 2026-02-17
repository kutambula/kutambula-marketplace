import api from "../utils/api.utils";
import type { CreateProductDTO } from "../types/product.types";

export const productService = {
    async createProduct(product: CreateProductDTO) {
        const response = await api.post("/product/new", product);
        return response.data;
    }
}