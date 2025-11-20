// ===============================
// 1) CONSTANTES E TIPOS (FORA)
// ===============================

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.exemplo.com";

type HttpMethod = "GET" | "POST";

interface ApiError {
  message: string;
  status?: number;
}

// ===============================
// 2) FUNÇÃO DE RETRY (FORA)
// ===============================

async function fetchWithRetry(fn: () => Promise<Response>, retries = 2) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) throw error;
    return fetchWithRetry(fn, retries - 1);
  }
}

// ===============================
// 3) OBJETO API (AQUI FICA TUDO)
// ===============================

export const api = {
  // GET -------------------------
  get: async function <T>(url: string): Promise<T> {
    return this.request<T>("GET", url);
  },

  // POST -------------------------
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: async function <T>(url: string, body?: any): Promise<T> {
    return this.request<T>("POST", url, body);
  },

  // REQUEST ----------------------
  request: async function <T>(
    method: HttpMethod,
    url: string,
    body?: unknown,
  ): Promise<T> {
    // 👉 AQUI FICA A CONSTANTE HEADERS
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // FETCH COM RETRY
    const response = await fetchWithRetry(
      () =>
        fetch(`${BASE_URL}${url}`, {
          method,
          headers,
          body: body ? JSON.stringify(body) : undefined,
        }),
      2,
    );

    // ERRO PADRONIZADO
    if (!response.ok) {
      const error: ApiError = {
        message: "Erro ao comunicar com o servidor",
        status: response.status,
      };

      try {
        const errorBody = await response.json();
        error.message = errorBody.message || error.message;
      } catch {}

      throw error;
    }

    // RETORNO TIPADO COM GENERICS
    const data = await response.json();
    return data as T;
  },
};
