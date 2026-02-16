/**
 * Tipo para payload do JWT
 */
interface JwtPayload {
  sub?: string;
  exp?: number;
  iat?: number;
  [key: string]: any;
}

/**
 * Get token from localStorage
 */
export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

/**
 * Set token in localStorage
 */
export const setToken = (token: string): void => {
  localStorage.setItem("token", token);
};

/**
 * Remove token from localStorage
 */
export const removeToken = (): void => {
  localStorage.removeItem("token");
};

/**
 * Clear all auth related data
 */
export const clearAuthData = (): void => {
  removeToken();
  localStorage.removeItem("user");
  localStorage.removeItem("refreshToken");
};

/**
 * Decode JWT token without verification (for client-side only)
 */
export const decodeToken = (token: string): JwtPayload | null => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Erro ao decodificar token:", error);
    return null;
  }
};

/**
 * Check if token is expired
 */
export const isTokenExpired = (token?: string): boolean => {
  try {
    const currentToken = token || getToken();
    if (!currentToken) return true;

    const payload = decodeToken(currentToken);
    if (!payload || !payload.exp) return true;

    // Compare with current time (exp is in seconds, Date.now() is in milliseconds)
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp <= currentTime;
  } catch (error) {
    console.error("Erro ao verificar expiração do token:", error);
    return true;
  }
};

/**
 * Get remaining time until token expiration (in milliseconds)
 */
export const getTokenExpirationTime = (token?: string): number => {
  try {
    const currentToken = token || getToken();
    if (!currentToken) return 0;

    const payload = decodeToken(currentToken);
    if (!payload || !payload.exp) return 0;

    const currentTime = Math.floor(Date.now() / 1000);
    const remainingTime = (payload.exp - currentTime) * 1000; // Convert to milliseconds
    return Math.max(0, remainingTime);
  } catch (error) {
    console.error("Erro ao calcular tempo de expiração:", error);
    return 0;
  }
};

/**
 * Check if token is valid
 */
export const isTokenValid = (token?: string): boolean => {
  try {
    const currentToken = token || getToken();
    if (!currentToken) return false;

    const payload = decodeToken(currentToken);
    return payload !== null && !isTokenExpired(currentToken);
  } catch (error) {
    console.error("Erro ao validar token:", error);
    return false;
  }
};

/**
 * Get token claims
 */
export const getTokenClaims = (): JwtPayload | null => {
  try {
    const token = getToken();
    return token ? decodeToken(token) : null;
  } catch (error) {
    console.error("Erro ao obter claims do token:", error);
    return null;
  }
};

export type { JwtPayload };