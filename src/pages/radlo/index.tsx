import { SEOWrapper } from "@/components/SEO";
import TwProduct from "@/components/tw/Product";
import FeatureSection, { TwFeatureType, TwItemPlacement } from "@/components/tw/FeatureSection";
import { GooglePlayButton, AppStoreButton } from "@/components/mobile-app-button";

function PriceCard({ price }: { price: number }) {
  return (
    <div className="max-w-lg mx-auto border border-slate-200 rounded-2xl shadow-soft bg-indigo-50">
      <div className="-mt-5 text-center">
        <span className="uppercase inline-block bg-rose-200 text-slate-900 text-xs font-semibold px-3 py-1 rounded-xl">Pricing</span>
      </div>
      <div className="px-12 py-6 text-center">
        <div className="text-3xl font-semibold">₹ <span className="text-5xl font-black">{price}</span> <span className="text-3xl text-slate-500">/month</span></div>
      </div>
    </div>
  );
}

const Radlo = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=in.reticulo.gameplan";
  const IOSUrl = "https://apps.apple.com/in/app/radlo/id6479612600";

  return (
    <SEOWrapper
      title="Reticulo | Radlo"
      description={
        "Revolutionize your sports academy experience with our comprehensive platform, built to empower coaches and elevate players."
      }
    >
      <TwProduct
        name={"Radlo"}
        icon={<img src="/radlo/logo.png" alt="Radlo Logo" className="h-7 w-7" />}
        simpleDescription={"Your All-in-One Sports Academy Ecosystem"}
        description={
          "Revolutionize your sports academy experience with our comprehensive platform, built to empower coaches and elevate players."
        }
      >
        <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
          <div>
            <GooglePlayButton
              url={APKUrl}
              width={190}
              theme={"dark"}
              height={64}
              className="app-store-button"
            />
          </div>
          <div>
            <AppStoreButton
              url={IOSUrl}
              width={190}
              theme={"dark"}
              height={64}
              className="app-store-button"
            />
          </div>
        </div>
        {/* <Stack
          w={{ base: "90%", sm: "80%" }}
          scaleX={4}
          direction={{ base: "column", sm: "row" }}
        >
          <LinkBox w="full">
            <Button w="100%" colorScheme={"red"}>
              <LinkOverlay
                isExternal
                href="https://www.youtube.com/watch?v=w7b03ZK6-XY"
                textDecor={"none"}
              >
                Click here for Demo!
              </LinkOverlay>
            </Button>
          </LinkBox>
        </Stack> */}
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2">
            <button className="px-4 py-2 rounded-full border border-indigo-500 bg-indigo-50 text-indigo-700">For Players</button>
            <button className="px-4 py-2 rounded-full border border-slate-300">For Coaches</button>
          </div>
        </div>
        <div className="mt-8">
              <FeatureSection
                name="Tournaments"
                description="Keep track of all your tournaments and get notified whenever there is a new one or changes"
                featurePlacement={TwItemPlacement.RIGHT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/tournaments.png"
              />
              <FeatureSection
                name="Digital Diary"
                description="Keep track of your daily activities and record your progress"
                featurePlacement={TwItemPlacement.LEFT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/diary.png"
              />
              <FeatureSection
                name="Fees"
                description="Pay your fees directly with all your payment methods like UPI, Net Banking, Credit Cards, Debit Cards, EMI, etc."
                featurePlacement={TwItemPlacement.RIGHT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/fees.png"
              />
              <FeatureSection
                name="Attendance"
                description="Keep track of your attendance and get detailed reports"
                featurePlacement={TwItemPlacement.LEFT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/player_attendance.png"
              />
              <FeatureSection
                name="Notice Board"
                description="Get notified whenever there is a new notice or holiday"
                featurePlacement={TwItemPlacement.RIGHT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/updates.png"
              />
              <div className="pt-16" />
              <PriceCard price={100} />

              <div className="pt-16" />
              <FeatureSection
                name="Fee Management"
                description="Easily collect and manage your player's fees"
                featurePlacement={TwItemPlacement.RIGHT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/fees.png"
              />
              <FeatureSection
                name="Attendance"
                description="Manage your player's attendance and get detailed reports"
                featurePlacement={TwItemPlacement.LEFT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/attendancemanagement.png"
              />
              <FeatureSection
                name="Finances"
                description="Track your academy's finances and get a easy to view dashboard"
                featurePlacement={TwItemPlacement.RIGHT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/finances.png"
              />
              <FeatureSection
                name="Notice Board"
                description="Convey any important information to your players in a clear and concise manner along with holiday notices"
                featurePlacement={TwItemPlacement.LEFT}
                featureType={TwFeatureType.IMAGE}
                featureUrl="/radlo/holidays.png"
              />
              <div className="pt-16" />
              <PriceCard price={0} />
        </div>
      </TwProduct>
    </SEOWrapper>
  );
};

export default Radlo;
