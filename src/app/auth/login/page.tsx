import { Container } from '@/components/layout/container';
import Wrap from '@/components/layout/wrap';
import { SocialLoginKakao } from '../login/socialLoginKakao';
import { Button } from '@/components/ui/button';
import { login, signInWithKakaoServer } from './action';

export default function Page() {
  return (
    <Container>
      <Wrap>
        <form>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={login}>Log in</button>
            {/* <button formAction={signup}>Sign up</button> */}
          </div>
          {/* <SocialLoginKakao /> */}
          {/* <Button
            variant={'outline'}
            // onClick={() => {
            //   signInWithKakao();
            // }}
            onClick={signInWithKakaoServer}
          >
            카카오 로그인 - server
          </Button> */}
          <button formAction={signInWithKakaoServer}>카카오 로그인</button>
        </form>
      </Wrap>
    </Container>
  );
}
