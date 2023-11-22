// client/src/services/api.ts
const BASE_URL = "http://localhost:3001"; // Replace with your backend URL
// const BASE_URL = "http://server:3001";

export const fetchData = async (endpoint: string): Promise<any> => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
