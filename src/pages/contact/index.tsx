import { Button } from 'components/Button';
import { Nav, Navigation } from 'components/nav';
import { Section } from 'components/Section';

export default function ContactPage() {
  return (
    <div className="">
      <div className="body-container">
        <img
          src="game-board.jpg"
          alt="Game Board Background"
          className="opacity-[.23] fixed top-0 block h-full w-full object-cover z-[-10]"></img>
        <Navigation></Navigation>
        <div className="flex flex-row justify-between items-center flex-nowrap px-40 bg-slate-800/95 text-white pt-28">
          <img src="logo.png" className="w-96"></img>
          <form className="flex flex-col flex-nowrap items-start justify-start">
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" id="input-name" />
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="Email"
              id="input-email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            />
            <label htmlFor="Message">Message</label>
            <textarea
              name="Message"
              id="input-message"
              cols={50}
              rows={10}
              maxLength={350}></textarea>
            <input type="submit" value="Submit" className="cursor-pointer" />
          </form>
        </div>
      </div>
    </div>
  );
}
