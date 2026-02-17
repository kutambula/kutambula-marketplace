import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productService } from "../services/product.service";
import type {
    CreateProductDTO,
    ListProductsParams,
    FindProductsByOrgParams
} from "../types/product.types";

/**
 * Hook centralizado para operações de produtos
 */
export const useProduct = () => {
    const queryClient = useQueryClient();

    // Listagem geral de produtos
    const useListProducts = (params?: ListProductsParams) => {
        return useQuery({
            queryKey: ["products", "list", params],
            queryFn: () => productService.listProducts(params),
        });
    };

    // Detalhes de um produto específico
    const useGetProduct = (id: string) => {
        return useQuery({
            queryKey: ["products", "detail", id],
            queryFn: () => productService.getProductById(id),
            enabled: !!id,
        });
    };

    // Produtos por organização
    const useProductsByOrg = (params: FindProductsByOrgParams) => {
        return useQuery({
            queryKey: ["products", "organization", params.organizationId, params],
            queryFn: () => productService.findProductsByOrg(params),
            enabled: !!params.organizationId,
        });
    };

    // Mutação para criar produto
    const createMutation = useMutation({
        mutationKey: ["create_product"],
        mutationFn: (payload: CreateProductDTO) => productService.createProduct(payload),
        onSuccess: (_, variables) => {
            // Invalida listas relevantes
            queryClient.invalidateQueries({ queryKey: ["products", "list"] });
            queryClient.invalidateQueries({
                queryKey: ["products", "organization", variables.organizationId]
            });
        },
    });

    return {
        useListProducts,
        useGetProduct,
        useProductsByOrg,
        createMutation,
        service: productService,
    };
};
