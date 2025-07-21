import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)?",
  "/account(.*)?",
  "/transactions"
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if ( !userId && isProtectedRoute(req) ) {
    const { redirectToSignIn } = await auth();
    // Redirect to sign-in page if the user is not authenticated
    // This will redirect to the Clerk sign-in page

    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};