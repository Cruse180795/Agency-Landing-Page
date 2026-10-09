type TransformYourBrandSectionProps = {
  mobileImageSrc: string;
  desktopImageSrc: string;
};

export default function TransformYourBrandSection({
  mobileImageSrc,
  desktopImageSrc,
}: TransformYourBrandSectionProps) {
  return (
    <section id="TransformYourBrandSection">
      {/** Image */}
      <picture>
        <source src={desktopImageSrc} media="(min-width: 768px)" />
        <img
          src={mobileImageSrc}
          alt="Transform your brand image"
          className="aspect-auto object-cover w-full"
          width="719"
          height="896"
          decoding="async"
          loading="lazy"
        />
      </picture>

      {/** Content */}
      <div className="px-6 py-16 text-center space-y-6">
        <h2 className="font-black text-32 leading-125 text-gray-950">Transform your brand</h2>

        <p className="text-lg leading-165 text-grey-550">
          We are a full-service creative agency specializing in helping brands grow fast. Engage your
          clients through compelling visuals that do most of the marketing for you.
        </p>

        <a href="#" target="_blank" rel="noopener noreferrer" className="highlight">
          Learn More
        </a>
      </div>
    </section>
  );
}
