import React, { createContext, useState } from "react";
import NavBar from "../navigation/nav-bar";

export default function NoFancyLibrariesPage() {
  return (
    <>
      <NavBar />
      <form>
        <h1>Register:</h1>
        <div>Name:</div>
        <input placeholder="First name..." />
      </form>
    </>
  );
}
