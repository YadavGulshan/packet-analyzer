import React from 'react';
import { LandingPage } from '../components/Landing';
import { NavBar } from '../components/Navbar';
import { DropFile } from '../components/DropFile';
export default function Home() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <DropFile />
    </>
  );
}
