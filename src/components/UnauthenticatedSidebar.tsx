import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const UnAuthenticatedSidebar = () => {
  return (
    <div className="sticky top-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold">
            Welcome to Social App
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-center text-sm text-muted-foreground">
            Sign in to view your profile, follow users, and share posts.
          </p>

          <SignInButton mode="modal">
            <Button className="w-full" variant="outline">
              Log In
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button className="w-full" variant="default">
              Create Account
            </Button>
          </SignUpButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnAuthenticatedSidebar;
