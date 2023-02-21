import Link from 'next/link';

interface ButtonProps {
  link: string;
  title: string;
}

export const Button = ({ link, title }: ButtonProps) => {
  return (
    <button className="py-4 px-6 mt-8 bg-slate-700 text-white border-b-4 border-transparent hover:border-slate-900 transition-colors">
      <Link href={link}>{title}</Link>
    </button>
  );
};
