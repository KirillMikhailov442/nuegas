import Input from '@UI/Input';
import Button from '@UI/Button';
import { NextPage } from 'next';

const SignInScreen: NextPage = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <form className="w-[400px] flex flex-col gap-4 mx-4">
        <h3 className="text-center">Войти</h3>
        <Input placeholder="Введите почту" label="Email" type="email" />
        <Input placeholder="Введите пароль" label="Пароль" type="password" />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default SignInScreen;
