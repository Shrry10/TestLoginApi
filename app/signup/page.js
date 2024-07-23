"use client";

import React from "react";
import SignupForm from "@/components/signupForm";

export default function Home() {
  const handleSubmit = async (id, pass) => {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      const data = await response.json();
      console.log(data);
      if (data.message === "OK") {
        alert("USERID ALREADY EXISTS");
      } else {
        const response1 = await fetch("http://localhost:3000/api/users", {
          method: "POST",
          body: JSON.stringify({ id: id, pass: pass }),
        });
        alert("SIGNUP SUCCESSFUL!");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      <main className="container">
        <SignupForm handleSubmit={handleSubmit} />
      </main>
    </>
  );
}
