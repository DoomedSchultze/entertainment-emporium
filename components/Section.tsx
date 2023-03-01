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
          <img className="section-img" src={image} alt="Section Image"></img>
        </div>
        <div className="section-content">{children}</div>
      </div>
    </div>
  );
};

interface SectionProps {
  children: React.ReactNode;
  header: string;
  image?: string;
}

export const SectionGroup = ({ children, image, header }: SectionProps) => {
  if (image === null) {
    return (
      <div className="section-content-container">
        <h2>{header}</h2>
        {children}
      </div>
    );
  } else {
    return (
      <div className="section-content-container">
        <img
          src={image}
          alt={`${header} header image.`}
          className="w-full max-h-52 object-cover rounded-md"></img>
        <h2>{header}</h2>
        {children}
      </div>
    );
  }
};
