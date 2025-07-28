import styles from './SignIn.module.scss';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import { NextPage } from 'next';

const SignInScreen: NextPage = () => {
  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <h3 className={styles.title}>Войти</h3>
        <Input
          placeholder="Введите почту"
          label="Email"
          type="email"
        />
        <Input
          placeholder="Введите пароль"
          label="Пароль"
          type="password"
        />
        <Button>Войти</Button>
      </form>
    </div>
  );
};

export default SignInScreen;
