/** Section Imports */
import TransformYourBrandSection from "./components/sections/TransformYourBrandSection";
import StandOutToTheRightAudienceSection from "./components/sections/StandOutToTheRightAudienceSection";

/** Image Imports */
import TransformYourBrandMobileImage from "./assets/images/mobile/image-transform.jpg";
import TransformYourBrandDesktopImage from "./assets/images/desktop/image-transform.jpg";

import StandOutToYourAudienceMobileImage from "./assets/images/mobile/image-stand-out.jpg";
import StandOutToYourAudienceDesktopImage from "./assets/images/desktop/image-stand-out.jpg";

export default function App() {
  return (
    <div>
      <main>
        <TransformYourBrandSection
          mobileImageSrc={TransformYourBrandMobileImage}
          desktopImageSrc={TransformYourBrandDesktopImage}
        />
        <StandOutToTheRightAudienceSection
          mobileImageSrc={StandOutToYourAudienceMobileImage}
          desktopImageSrc={StandOutToYourAudienceDesktopImage}
        />
      </main>
    </div>
  );
}
