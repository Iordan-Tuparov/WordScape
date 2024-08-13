export const register = async (username, password, repeatPassword) => {
  const userData = { username, password };

  if (password != repeatPassword) {
    throw {
      message: "Passwords is not matching!",
    };
  }

  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data;
};
