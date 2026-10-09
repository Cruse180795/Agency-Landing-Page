import TransformYourBrandSection from "./components/sections/TransformYourBrandSection";

/** Image Imports */
import TransformYourBrandMobileImage from "./assets/images/mobile/image-transform.jpg";
import TransformYourBrandDesktopImage from "./assets/images/desktop/image-transform.jpg";

export default function App() {
  return (
    <div>
      <main>
        <TransformYourBrandSection
          mobileImageSrc={TransformYourBrandMobileImage}
          desktopImageSrc={TransformYourBrandDesktopImage}
        />
      </main>
    </div>
  );
}
