"use client"
import React from 'react';
import Layout from "@/app/components/Layout";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
          <Layout/>
      </main>
  );
}
