export const register = async (formData) => {
  const username = formData.get("username");
  const password = formData.get("password");
  const repeatPassword = formData.get("repeatPassword");

  if (!username || !password) {
    throw {
      message: "The username and password is require!",
    };
  }

  if (password != repeatPassword) {
    throw {
      message: "Passwords is not matching!",
    };
  }

  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    body: formData,
  });

  if (response.status === 400) {
    const errorData = await response.json();

    throw {
      message: errorData.message,
    };
  }

  if (response.status === 409) {
    const errorData = await response.json();

    throw {
      message: errorData.message,
    };
  }

  const data = await response.json();

  return data;
};

export const login = async (username, password) => {
  if (!username || !password) {
    throw {
      message: "The username and password is require!",
    };
  }

  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.status === 400) {
    const errorMessage = await response.json();

    throw {
      message: errorMessage.message,
    };
  }

  return response.json();
};
