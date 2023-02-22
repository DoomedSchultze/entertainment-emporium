import Image from 'next/image';

interface BackgroundColorProps {
  children: React.ReactNode;
  image: string;
}

export const Section = ({ children, image }: BackgroundColorProps) => {
  return (
    <div className={`section-container relative bg-slate-700/[.33] backdrop-blur-sm`}>
      <div className="section-container-content">
        <div className="section-image">
          <Image className="section-img" src={image} alt="Section Image"></Image>
        </div>
        <div className="section-content">{children}</div>
      </div>
    </div>
  );
};
