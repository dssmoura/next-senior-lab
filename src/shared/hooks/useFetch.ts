/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { api } from "@/shared/services/api";

export function useFetch<T = any>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const abortController = useRef<AbortController | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // cancela requisição anterior
      abortController.current?.abort();
      abortController.current = new AbortController();

      const response = await api.get<T>(url, {
        headers: options?.headers as Record<string, string>,
        signal: abortController.current.signal,
      });

      setData(response as T);
    } catch (err: any) {
      if (err.name === "AbortError") return;
      setError(err.message ?? "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  }, [url, JSON.stringify(options)]);

  useEffect(() => {
    fetchData();

    return () => {
      abortController.current?.abort();
    };
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
