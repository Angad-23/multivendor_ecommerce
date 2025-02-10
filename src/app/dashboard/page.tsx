// Next.js
import { currentUser } from "@clerk/nextjs/server";

// Clerk
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // Retrieve the current user information
  const user = await currentUser();

  // If user role is not defined or is USER, redirect to the home page
  if (!user?.privateMetadata?.role || user?.privateMetadata.role === "USER")
    redirect("/");

  // If user role is ADMIN, redirect to the admin dashboard
  if (user.privateMetadata.role === "ADMIN") redirect("/dashboard/admin");

  // If user role is SELLER, redirect to the seller dashboard
  if (user.privateMetadata.role === "SELLER") redirect("/dashboard/seller");
}
