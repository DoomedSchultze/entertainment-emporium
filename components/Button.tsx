import Link from 'next/link';

interface ButtonProps {
  link: string;
  title: string;
}

export const Button = ({ link, title }: ButtonProps) => {
  return (
    <button className="py-4 px-6 mt-8 bg-slate-100 text-slate-900 border-b-4 border-slate-500 hover:border-slate-900 transition-colors rounded-lg">
      <Link href={link} className="flex pt-2">
        {title}
      </Link>
    </button>
  );
};
