import { toast, ToastOptions, TypeOptions } from 'react-toastify';

interface GetToastOptions {
  text: string;
  type: TypeOptions;
}

const getToast = ({ text, type }: GetToastOptions): void => {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const toastMethod = toast[type as keyof typeof toast] as (text: string, options: ToastOptions) => void;
 toastMethod(text, options);
};

export { getToast };