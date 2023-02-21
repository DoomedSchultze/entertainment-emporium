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

export const Profile = () => {
  let userName = 'its_jordan';
  var signedIn = 0;
  if (signedIn == 0) {
    return (
      <Link
        href={`user/${userName}`}
        className="profile-container hover:bg-slate-800 h-16 min-w-[4rem] w-max px-4 flex justify-center items-center rounded-lg transition-colors [&:hover_>_*]:text-white">
        <div className="pr-4 pt-1 transition-colors text-lg font-bold">
          {userName}
        </div>
        <FontAwesomeIcon
          icon={faUser}
          className="text-slate-800 scale-150 transition-colors"
        />
      </Link>
    );
  } else {
    return (
      <Link
        href="user/login"
        className="profile-container hover:bg-slate-800 h-16 min-w-[4rem] w-max px-4 flex justify-center items-center rounded-lg transition-colors [&:hover_>_*]:text-white">
        <div className="pr-4 pt-1 transition-colors">Sign In</div>
        <FontAwesomeIcon
          icon={faUser}
          className="text-slate-800 scale-150 transition-colors"
        />
      </Link>
    );
  }
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
          <Profile />
        </div>
      </div>
    </div>
  );
};
