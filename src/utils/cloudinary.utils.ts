// --------------------------
// CLOUDINARY UPLOAD TYPES
// --------------------------
import type  { CloudinaryUploadOptions, CloudinaryUploadResponse } from "../types/cloudinary.types";

// --------------------------
// CLOUDINARY CONFIGURATION
// --------------------------

const CLOUDINARY_CLOUD_NAME = "de7pp8857";
const CLOUDINARY_UPLOAD_PRESET = "emalungo_cloudinary";
const CLOUDINARY_API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

// --------------------------
// UPLOAD FUNCTIONS
// --------------------------

/**
 * Upload de imagem para Cloudinary
 * Aceita File (do input) ou URL de imagem
 */
export const uploadImageToCloudinary = async (
  file: File,
  options?: CloudinaryUploadOptions
): Promise<string | null> => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    // Adicionar pasta opcional
    if (options?.folder) {
      formData.append("folder", options.folder);
    }

    // Adicionar transformações opcionais
    if (options?.transformation) {
      formData.append("transformation", options.transformation);
    }

    const response = await fetch(CLOUDINARY_API_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Erro no upload do Cloudinary:", errorText);
      return null;
    }

    const result: CloudinaryUploadResponse = await response.json();
    
    if (result.secure_url) {
      console.log("Upload realizado com sucesso:", result.secure_url);
      return result.secure_url;
    }

    console.error("Erro no upload: URL segura não encontrada");
    return null;
  } catch (error) {
    console.error("Erro ao enviar imagem:", error);
    return null;
  }
};

/**
 * Upload múltiplo de imagens
 */
export const uploadMultipleImages = async (
  files: File[],
  options?: CloudinaryUploadOptions
): Promise<string[]> => {
  try {
    const uploadPromises = files.map((file) =>
      uploadImageToCloudinary(file, options)
    );
    const results = await Promise.all(uploadPromises);
    return results.filter((url): url is string => url !== null);
  } catch (error) {
    console.error("Erro ao enviar múltiplas imagens:", error);
    return [];
  }
};

/**
 * Validar arquivo de imagem
 */
export const validateImageFile = (file: File): { valid: boolean; error?: string } => {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];

  if (!allowedTypes.includes(file.type)) {
    return {
      valid: false,
      error: "Tipo de arquivo não suportado. Use JPEG, PNG, WebP ou GIF.",
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      error: "Arquivo muito grande. Tamanho máximo: 10MB.",
    };
  }

  return { valid: true };
};

/**
 * Converter URL de imagem em File object
 * Útil para quando receber URL e precisar fazer re-upload
 */
export const urlToFile = async (
  url: string,
  filename: string = "image.jpg"
): Promise<File | null> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: blob.type });
  } catch (error) {
    console.error("Erro ao converter URL em File:", error);
    return null;
  }
};

/**
 * Redimensionar imagem antes do upload (client-side)
 */
export const resizeImage = (
  file: File,
  maxWidth: number,
  maxHeight: number
): Promise<File> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (blob) {
              const resizedFile = new File([blob], file.name, {
                type: file.type,
                lastModified: Date.now(),
              });
              resolve(resizedFile);
            } else {
              reject(new Error("Erro ao redimensionar imagem"));
            }
          },
          file.type,
          0.9
        );
      };

      img.onerror = () => {
        reject(new Error("Erro ao carregar imagem"));
      };
    };

    reader.onerror = () => {
      reject(new Error("Erro ao ler arquivo"));
    };
  });
};