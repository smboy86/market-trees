import { Container } from '@/components/layout/container';
import Wrap from '@/components/layout/wrap';
import { Button } from '@/components/ui/button';
import { login, signInWithKakaoServer } from './action';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function Page() {
  return (
    <Container>
      <Wrap>
        <form>
          {/* <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
          </div> */}
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">로그인</CardTitle>
              <CardDescription>안녕하세요, 마켓 연리지 입니다.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-6">
                <Button variant="outline" formAction={signInWithKakaoServer}>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  카카오톡 22
                </Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" name="password" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button formAction={login} className="w-full">
                로그인
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Wrap>
    </Container>
  );
}
