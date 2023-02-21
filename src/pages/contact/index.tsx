import { Nav } from 'components/nav';

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-row flex-nowrap justify-between mx-4 my-2 rounded-md">
        <div className="logo-container">
          <img src="logo.png" alt=""></img>
        </div>
        <Nav></Nav>
        <div className="profile-container"></div>
      </div>
    </>
  );
}
