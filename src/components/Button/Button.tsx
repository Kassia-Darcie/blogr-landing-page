import { ubuntu } from '@/app/fonts';

type Props = {
  variant: 'fill' | 'outline';
  title: string;
  onClick?: () => void;
}

export const Button = ({variant, title, onClick}: Props) => {
  const style = {
    fill: 'bg-white text-primary',
    outline: 'border border-white text-white'
  };

  return (
    <button
      className={`${ubuntu.className} py-2 px-4 shadow-sm  rounded-full font-bold cursor-pointer
        ${style[variant]}
      `}
      onClick={onClick}
    >
      {title } 
    </button>
  );
};