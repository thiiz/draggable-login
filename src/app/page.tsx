import SignIn from "@/components/signin";
import { SignInContainer, Main } from "@/styles/page";

export const metadata = {
  title: 'Signin - NFTEC',
};


export default function Page() {
  return (
    <Main>
      <SignInContainer>
        <SignIn />
      </SignInContainer>
    </Main>
  )
}