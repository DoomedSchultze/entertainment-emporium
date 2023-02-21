import { Navigation } from 'components/nav';
import { Section } from 'components/Section';
import Link from 'next/link';

export default function HomePage() {
  let Array: string[][] = [
    ['Home', '/'],
    ['Play Online', '/'],
    ['Online Calculator', '/calculator'],
    ['Buy The Game', '/purchase'],
    ['Contact Us', '/contact'],
  ];
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, repudiandae eligendi recusandae rem, quaerat quis
            saepe sint excepturi, aut sit culpa architecto dolorem odit illo.
            Magni odit temporibus natus nostrum? Tenetur repellendus maiores,
            autem unde quisquam eum, delectus possimus impedit asperiores
            deserunt, quaerat facilis necessitatibus quas nobis aspernatur
            quibusdam consequatur harum? Itaque, illo impedit alias asperiores
            atque nihil dicta explicabo.
          </p>
        </div>
        <Section image="attractionCardSingle.png">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, repudiandae eligendi recusandae rem, quaerat quis
            saepe sint excepturi, aut sit culpa architecto dolorem odit illo.
            Magni odit temporibus natus nostrum? Tenetur repellendus maiores,
            autem unde quisquam eum, delectus possimus impedit asperiores
            deserunt, quaerat facilis necessitatibus quas nobis aspernatur
            quibusdam consequatur harum? Itaque, illo impedit alias asperiores
            atque nihil dicta explicabo.
          </p>
          <button className="py-4 px-6 mt-8 bg-slate-700 text-white border-b-4 border-transparent hover:border-slate-900 transition-colors">
            <Link href="">Purchase the Game!</Link>
          </button>
        </Section>
      </div>
    </div>
  );
}
