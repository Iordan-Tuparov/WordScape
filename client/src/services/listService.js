export const createList = async (text) => {
  if (!text) {
    throw {
      message: "The text is required!",
    };
  }

  const auth = localStorage.getItem("auth");

  const response = await fetch("http://localhost:3000/list/create", {
    method: "POST",
    headers: {
      "Authorization": JSON.parse(auth).accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw {
      message: `Response with status ${response.status}`,
    };
  }

  return response.json();
};

export const lists = async () => {
  const response = await fetch('http://localhost:3000/list/getAllLists')

  return response.json();
}