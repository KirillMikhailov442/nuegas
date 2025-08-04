import Input from '@UI/Input';
import Button from '@UI/Button';
import { NextPage } from 'next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignInScreen: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      email: Yup.string()
        .trim()
        .required('Введите почту')
        .email('Некорректная почта'),
      password: Yup.string().trim().required('Введите пароль'),
    },
    validateOnBlur: false,
    onSubmit: () => {},
  });
  return (
    <div className="flex items-center justify-center w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="w-[400px] flex flex-col gap-4 mx-4">
        <h3 className="text-center">Войти</h3>
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          error={formik.errors.email}
          placeholder="Введите почту"
          label="Email"
          type="email"
        />
        <Input
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
          error={formik.errors.email}
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
