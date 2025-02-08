import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isprotectedRoute = createRouteMatcher(["/", "/dashboard/(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isprotectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
