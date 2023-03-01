import { Button } from 'components/Button';
import { Navigation, Profile } from 'components/nav';
import { Section, SectionGroup } from 'components/Section';
import Image from 'next/image';

export default function HomePage() {
  let login = false;
  let username = 'n/a';
  return (
    <div className="">
      <div className="body-container">
        <img
          src="game-board.jpg"
          alt="Game Board Background"
          className="opacity-[.23] fixed top-0 block h-full w-full object-cover z-[-10]"></img>
        <Navigation>
          <Profile login={login} user={username} />
        </Navigation>
        <div className="flex flex-row justify-between items-center flex-nowrap px-40 bg-slate-800/95 text-white pt-28">
          <img src="logo.png" className="w-96" alt="Logo"></img>
          <p className="max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, provident placeat.
            Accusantium facilis veniam voluptatibus reiciendis aut unde nobis! Nesciunt veniam quia
            velit magnam, ea ut accusantium laboriosam quidem cupiditate.
          </p>
        </div>
        <Section image="attractionCardSingle.png">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id ducimus temporibus
            repellendus dicta, exercitationem voluptatum deleniti omnis voluptates tenetur
            voluptatibus architecto dolores nihil, aut non sapiente ullam quia sed doloremque.
          </p>
          <Button link="" title="Purchase the Game!"></Button>
        </Section>
        <div className="section-group">
          <SectionGroup header="Section 1" image="game-board.jpg">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi modi, molestias
              quisquam error deleniti reiciendis dignissimos et sit consequatur. Magnam delectus
              nulla iusto dolorum aut laboriosam atque consequatur ratione modi!
            </p>
          </SectionGroup>
          <SectionGroup header="Section 2" image="game-board.jpg">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum rem, earum
              corporis, quisquam, dolor magni deleniti optio odit animi rerum dolore. Accusamus
              reprehenderit dignissimos similique quod quibusdam perferendis ipsam.
            </p>
          </SectionGroup>
          <SectionGroup header="Section 3" image="game-board.jpg">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum ipsa dicta animi
              corrupti praesentium voluptate voluptas nisi labore. Quia porro sit quidem corporis
              iusto quae adipisci officia fuga ea?
            </p>
          </SectionGroup>
        </div>
      </div>
    </div>
  );
}
