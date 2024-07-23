"use client";

import React from "react";
import LoginForm from "@/components/loginForm";

export default function Home() {
  const handleSubmit = async (id, pass) => {
    try {
      console.log(id);
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      const data = await response.json();
      console.log(data);
      if (data.message === "OK") {
        if (data.user.password === pass) {
          alert("L0GIN SUCCESSFUL!");
        } else {
          alert("INCORRECT PASSWORD");
        }
      } else {
        alert("INCORRECT USERID");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <>
      <main className="container">
        <LoginForm handleSubmit={handleSubmit} />
      </main>
    </>
  );
}
