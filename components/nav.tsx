import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  let Array: string[][] = [
    ['Home', '/'],
    ['Play Online', '/'],
    ['Online Calculator', '/calculator'],
    ['Buy The Game!', '/purchase'],
    ['Contact Us', '/contact'],
  ];
  return (
    <nav className="top-nav justify-center items-center gap-2 h-16">
      {Array.map(([title, url]) => (
        <Link key={title} href={url} className="nav-link max-w-max pt-2">
          {title}
        </Link>
      ))}
    </nav>
  );
};

export const Navigation = () => {
  return (
    <div className="fixed top-0 z-[150] flex min-w-[100vw] w-[100vw]">
      <div className="navigation-container">
        <div className="logo-container pl-8">
          <div className="text-logo text-2xl font-black uppercase pt-1">
            Entertainment Emporium
          </div>
        </div>
        <Nav></Nav>
        <div className="pr-4 justify-self-end">
          <Link
            href="user/login"
            className="profile-container hover:bg-slate-800 h-16 w-16 flex justify-center items-center rounded-lg transition-colors [&:hover_>_*]:text-white">
            <FontAwesomeIcon
              icon={faUser}
              className="text-slate-800 scale-150 transition-colors"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
