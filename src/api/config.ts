function get(endpoint: string) {
  const url = `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_URL_VER}/${endpoint}`;

  return fetch({ method: 'GET', url } as RequestInfo);
}

export { get };
