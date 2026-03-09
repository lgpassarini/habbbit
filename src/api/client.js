const BASE_URL = import.meta.env.VITE_API_URL;

// get token from localStorage
function getToken() {
  return localStorage.getItem('token');
}

// build headers with optional custom headers
function buildHeaders(customHeaders = {}) {
  // get token
  const token = getToken();

  // init headers with content type and merge with custom headers
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };

  // if token exists, automaticaly add Authorization header
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
}

async function handleResponse(response) {
  // if no content, return null
  if (response.status === 204) return null;

  // try to get json data, if it fails return null
  const data = await response.json().catch(() => null);

  // if response is not ok, throw error with message from response or default message
  if (!response.ok) {
    const error = new Error(
      data?.message ?? data?.error ?? 'HTTP Error ' + response.status,
    );
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

async function request(url, options = {}) {
  // get body and headers from options, and put the rest in config
  const { body, headers, ...rest } = options;

  // build config with headers and the rest of options
  const config = {
    headers: buildHeaders(headers),
    ...rest,
  };

  // if body is defined, stringify it and add to config
  if (body !== undefined) {
    config.body = JSON.stringify(body);
  }

  // perform fetch request and handle response
  const res = await fetch(`${BASE_URL}${url}`, config);
  return handleResponse(res);
}

export const client = {
  get: (url, options) => request(url, { method: 'GET', ...options }),
  post: (url, body, options) =>
    request(url, { method: 'POST', body, ...options }),
  put: (url, body, options) =>
    request(url, { method: 'PUT', body, ...options }),
  patch: (url, body, options) =>
    request(url, { method: 'PATCH', body, ...options }),
  delete: (url, options) => request(url, { method: 'DELETE', ...options }),
};
