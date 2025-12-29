/* eslint-disable @typescript-eslint/no-explicit-any */
import type { HttpMethod } from "@/shared/types/http";

type RequestOptions = {
  headers?: Record<string, string>;
  body?: any;
  signal?: AbortSignal;
};

export const api = {
  async get<T>(url: string, options: RequestOptions = {}): Promise<T> {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
      signal: options.signal,
    });
    return res.json();
  },

  async post<T>(url: string, body?: any, options: RequestOptions = {}): Promise<T> {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
      body: JSON.stringify(body),
      signal: options.signal,
    });

    return res.json();
  },

  async request<T>(
    method: HttpMethod,
    url: string,
    body?: unknown,
    options: RequestOptions = {},
  ): Promise<T> {
    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers ?? {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: options.signal,
    });

    return res.json();
  },
};
