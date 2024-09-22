export const loginUser = async (username, otp) => {
  try {
    const response = await fetch("https://assignment.stage.crafto.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        otp: otp,
      }),
    });

    if (!response.ok) {
      console.error(`Error status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
