import * as React from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface LoginCardProps {
  className?: string;
}

/**
 * A card component for user login, containing username and password fields,
 * a submit button, and a link to the sign-up page.
 * It follows the design of a minimal and clean login interface.
 */
const LoginCard: React.FC<LoginCardProps> = ({ className }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    console.log('Logging in with:', { username, password });

    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <Card className={cn('w-96', className)}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Log in</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            required
          />
          <Input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            required
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-4">
          <Button type="submit" className="w-full h-12 font-bold" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </Button>
          <p className="text-sm text-muted-foreground">
            or, sign up
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};

export default LoginCard;
