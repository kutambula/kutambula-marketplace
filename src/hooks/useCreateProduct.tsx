import { useMutation } from "@tanstack/react-query";

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

export const useCreateProduct = () => {

  return useMutation<CreateProductReturn, Error, CreateProductDTO>({
    mutationKey: ["create_product"],

    mutationFn: async (payload: CreateProductDTO) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/product/new`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data?.message)
        throw new Error(data?.message || "Erro ao criar produto");
      }

      return data;
    },
  });
};
