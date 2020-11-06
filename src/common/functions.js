export const fetchEndpoint = async () => {
  const result = await fetch("/api/test");

  return result.json();
};