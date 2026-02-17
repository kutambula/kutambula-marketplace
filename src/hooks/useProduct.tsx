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
            queryClient.invalidateQueries({ queryKey: ["products"] });
            queryClient.invalidateQueries({
                queryKey: ["products", "organization", variables.organizationId]
            });
        },
    });

    // Mutação para atualizar produto
    const updateMutation = useMutation({
        mutationKey: ["update_product"],
        mutationFn: ({ id, payload }: { id: string; payload: Partial<CreateProductDTO> }) =>
            productService.updateProduct(id, payload),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
            // Se soubermos a orgId através do retorno ou contexto, poderíamos invalidar especificamente.
            // Para simplificar, invalidamos o cache geral de produtos.
        },
    });

    // Mutação para deletar produto
    const deleteMutation = useMutation({
        mutationKey: ["delete_product"],
        mutationFn: (id: string) => productService.deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["products"] });
        },
    });

    return {
        useListProducts,
        useGetProduct,
        useProductsByOrg,
        createMutation,
        updateMutation,
        deleteMutation,
        service: productService,
    };
};
