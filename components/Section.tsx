interface BackgroundColorProps {
  children: React.ReactNode;
  image: string;
}

export const Section = ({ children, image }: BackgroundColorProps) => {
  return (
    <div className={`section-container relative bg-slate-700/[.33] backdrop-blur-sm`}>
      <div className="section-container-content">
        <div className="section-image">
          <img className="section-img" src={image}></img>
        </div>
        <div className="section-content">{children}</div>
      </div>
    </div>
  );
};
