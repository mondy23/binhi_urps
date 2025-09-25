export interface UserData {
    area: string;
    designation: string;
    exp: number;
    fullName: string;
    insticode: number;
    institution: string;
    rolename: string;
    staffID: string;
    unit: string;
  }
  
  export interface ApiResponse {
    retCode: string;
    message: string;
    data: UserData;
  }
  
  export async function getUserDetails(token: string): Promise<ApiResponse> {
    const response = await fetch(
      "https://dev-mercury.fortress-asya.com:17002/api/public/v1/user/validateUserToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: "yourDataHere" }),
      }
    );
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const result: ApiResponse = await response.json();
  
    return result;
  }
  