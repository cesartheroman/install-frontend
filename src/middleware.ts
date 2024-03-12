import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //Routes that can be accessed while signed out
  publicRoutes: ["/", "/landing"],
  //Routes that can always be accessed and no auth info
  ignoredRoutes: [],
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
