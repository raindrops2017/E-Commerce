

import getMyToken from "@/utilities/getMyToken";

export async function changeUserPassApi(currentPassword: string,
   password: string, rePassword: string) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("Your password can't be changed");
  }

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",
    {
      method: "PUT",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currentPassword,
        password,
        rePassword,
      }),
    }
  );

  const res = await response.json();
  return res;
}



export async function changeUserDataApi(userData: {
  name: string;
  email: string;
  phone: string;
}) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("Your info can't be changed");
  }

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/users/updateMe",
    {
      method: "PUT",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }
  );

  const res = await response.json();
  return res;
}
