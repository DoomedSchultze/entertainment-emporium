import { Button } from 'components/Button';
import { Navigation } from 'components/nav';
import { Section } from 'components/Section';
import Link from 'next/link';

export default function HomePage() {
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
          <p className="max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum,
            provident placeat. Accusantium facilis veniam voluptatibus
            reiciendis aut unde nobis! Nesciunt veniam quia velit magnam, ea ut
            accusantium laboriosam quidem cupiditate.
          </p>
        </div>
        <Section image="attractionCardSingle.png">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus
            temporibus repellendus dicta, exercitationem voluptatum deleniti
            omnis voluptates tenetur voluptatibus architecto dolores nihil, aut
            non sapiente ullam quia sed doloremque.
          </p>
          <Button link="" title="Purchase the Game!"></Button>
        </Section>
        <div className="section-group">
          <div className="section-content-container">Filler Text</div>
          <div className="section-content-container">Filler Text</div>
          <div className="section-content-container">Filler Text</div>
        </div>
      </div>
    </div>
  );
}
