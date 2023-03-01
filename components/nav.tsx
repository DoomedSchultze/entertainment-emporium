import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
  let Array: string[][] = [
    ['Home', '/'],
    ['Play Online', '/play'],
    ['Online Calculator', '/calculator'],
    ['Buy The Game!', '/purchase'],
    ['Contact Us', '/contact'],
  ];
  return (
    <nav className="top-nav justify-center items-center gap-2 h-16">
      {Array.map(([title, url]) => (
        <Link key={title} href={url} className="nav-link max-w-max pt-2 uppercase">
          {title}
        </Link>
      ))}
    </nav>
  );
};

interface ProfileProps {
  user: string;
  login: boolean;
}

export const Profile = ({ user, login }: ProfileProps) => {
  if (login == true) {
    var signedIn = 0;
  } else {
    var signedIn = 1;
  }
  let userName = user;

  if (signedIn == 0) {
    return (
      <Link
        href={`user/${userName}`}
        className="profile-container hover:bg-slate-800 h-16 min-w-[4rem] w-max px-4 flex justify-center items-center rounded-lg transition-colors [&:hover_>_*]:text-white">
        <FontAwesomeIcon icon={faUser} className="text-slate-800 scale-150 transition-colors" />
        <div className="pl-4 pt-1 transition-colors text-lg font-bold">{userName}</div>
      </Link>
    );
  } else {
    return (
      <Link
        href="user/login"
        className="profile-container hover:bg-slate-800 h-16 min-w-[4rem] w-max px-4 flex justify-center items-center rounded-lg transition-colors [&:hover_>_*]:text-white">
        <FontAwesomeIcon icon={faUser} className="text-slate-800 scale-150 transition-colors" />
        <div className="pl-4 pt-1 transition-colors text-lg font-bold">Sign In</div>
      </Link>
    );
  }
};

interface NavProps {
  children: React.ReactNode;
}

export const Navigation = ({ children }: NavProps) => {
  return (
    <div className="fixed top-0 z-[150] flex min-w-[100vw] w-[100vw]">
      <div className="navigation-container">
        <div className="logo-container pl-8">
          <div className="text-logo text-2xl font-black uppercase pt-1">
            <img src="text-logo.png" alt="text logo" className="w-72"></img>
          </div>
        </div>
        <Nav></Nav>
        <div className="pr-4 justify-self-end">{children}</div>
      </div>
    </div>
  );
};
