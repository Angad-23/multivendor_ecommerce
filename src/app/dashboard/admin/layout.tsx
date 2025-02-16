// React, Next.js
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

// Clerk
import { currentUser } from "@clerk/nextjs/server";

// Header
import Header from "@/components/dashboard/header/header";

// Sidebar
import Sidebar from "@/components/dashboard/sidebar/sidebar";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Block access to the admin dashboard if the user is not an admin
  const user = await currentUser();
  if (!user || user.privateMetadata.role !== "ADMIN") redirect("/");
  return (
    <div className="w-full h-full">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full ml-[300px]">
        {/*Header*/}
        <Header />
        <div className="w-full mt-[75px] p-4">{children}</div>
      </div>
    </div>
  );
}
