"use client";

import { useEffect, useState } from "react";
import { getUserDetails, UserData } from "./utils/getUserDetails";


export default function Page() {
  const [token, setToken] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    const tokenFromHash = hash?.split("token=")[1] || null;

    if (!tokenFromHash) return;

    setToken(tokenFromHash);

    const fetchUser = async () => {
      try {
        const result = await getUserDetails(tokenFromHash);

        if (result.retCode === "200") {
          setUserData(result.data);
          setMessage(result.message);
        } else {
          setError("Invalid token or user not found.");
        }
      } catch (err) {
        console.error("Error:", err);
        setError("An error occurred while validating the token.");
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2>User Validation</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Welcome, {userData.fullName}</h3>
          <ul>
            <li><strong>Staff ID:</strong> {userData.staffID}</li>
            <li><strong>Role:</strong> {userData.rolename}</li>
            <li><strong>Designation:</strong> {userData.designation}</li>
            <li><strong>Unit:</strong> {userData.unit}</li>
            <li><strong>Area:</strong> {userData.area}</li>
            <li><strong>Institution:</strong> {userData.institution}</li>
            <li><strong>Insti Code:</strong> {userData.insticode}</li>
            <li><strong>Token Expiry:</strong> {new Date(userData.exp * 1000).toLocaleString()}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
