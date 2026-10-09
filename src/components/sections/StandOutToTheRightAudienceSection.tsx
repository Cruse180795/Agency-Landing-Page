type StandOutToTheRightAudienceSectionProps = {
  mobileImageSrc: string;
  desktopImageSrc: string;
};

export default function StandOutToTheRightAudienceSection({
  mobileImageSrc,
  desktopImageSrc,
}: StandOutToTheRightAudienceSectionProps) {
  return (
    <section id="StandOutToTheRightAudienceSection">
      {/**Image */}
      <picture>
        <source srcSet={desktopImageSrc} />
        <img
          src={mobileImageSrc}
          alt="Stand out to the right audience image"
          className="aspect-auto object-cover w-full"
          width="719"
          height="896"
          decoding="async"
          loading="lazy"
        />
      </picture>
      {/** Content */}
      <div className="px-6 py-16 text-center space-y-6">
        <h2 className="font-black text-32 leading-125 text-gray-950">Stand out to the right audience</h2>

        <p className="text-lg leading-165 text-grey-550">
          Using a collaborative formula of designers, researchers, photographers, videographers, and
          copywriters, we’ll build and extend your brand in digital places.
        </p>

        <a href="#" target="_blank" rel="noopener noreferrer" className="highlight">
          Learn More
        </a>
      </div>
    </section>
  );
}
