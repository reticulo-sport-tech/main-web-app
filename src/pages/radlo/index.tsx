import { SEOWrapper } from "@/components/SEO";
import TwProduct from "@/components/tw/Product";
import { GooglePlayButton, AppStoreButton } from "@/components/mobile-app-button";
import { useState } from "react";
import { IoTrophyOutline, IoBookOutline, IoCardOutline, IoCalendarOutline, IoPeopleOutline, IoCashOutline, IoClipboardOutline, IoMegaphoneOutline, IoStatsChartOutline } from "react-icons/io5";

function PriceCard({ price }: { price: number }) {
  return (
    <div className="max-w-lg mx-auto border border-slate-200 dark:border-slate-700 rounded-2xl shadow-soft bg-indigo-50 dark:bg-slate-800">
      <div className="-mt-5 text-center">
        <span className="uppercase inline-block bg-rose-200 text-slate-900 dark:text-slate-900 text-xs font-semibold px-3 py-1 rounded-xl">Pricing</span>
      </div>
      <div className="px-12 py-6 text-center">
        <div className="text-3xl font-semibold">₹ <span className="text-5xl font-black">{price}</span> <span className="text-3xl text-slate-500 dark:text-slate-300">/month</span></div>
      </div>
    </div>
  );
}

const Radlo = () => {
  const APKUrl =
    "https://play.google.com/store/apps/details?id=in.reticulo.gameplan";
  const IOSUrl = "https://apps.apple.com/in/app/radlo/id6479612600";
  const [activeTab, setActiveTab] = useState<'players' | 'coaches'>("players");

  return (
    <SEOWrapper
      title="Reticulo | Radlo"
      description={
        "Revolutionize your sports academy experience with our comprehensive platform, built to empower coaches and elevate players."
      }
    >
      <main className="pt-20">
      <TwProduct
        name={"Radlo"}
        icon={<img src="/radlo/logo.png" alt="Radlo Logo" className="h-7 w-7" />}
        simpleDescription={"Your All-in-One Sports Academy Ecosystem"}
        description={
          "Revolutionize your sports academy experience with our comprehensive platform, built to empower coaches and elevate players."
        }
      >
        <div className="mt-4 flex flex-col md:flex-row gap-3 items-center justify-center">
          <div>
            <GooglePlayButton
              url={APKUrl}
              width={200}
              theme={"dark"}
              height={64}
              className="app-store-button"
            />
          </div>
          <div>
            <AppStoreButton
              url={IOSUrl}
              width={200}
              theme={"dark"}
              height={64}
              className="app-store-button"
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('players')}
              className={`px-4 py-2 rounded-full border transition ${activeTab === 'players' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-300 text-slate-700 hover:border-slate-400'}`}
            >
              For Players
            </button>
            <button
              onClick={() => setActiveTab('coaches')}
              className={`px-4 py-2 rounded-full border transition ${activeTab === 'coaches' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-slate-300 text-slate-700 hover:border-slate-400'}`}
            >
              For Coaches
            </button>
          </div>
          <div className="sr-only" aria-live="polite">{activeTab === 'players' ? 'Players tab active' : 'Coaches tab active'}</div>
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
          {activeTab === 'players' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {[{
                  icon: IoTrophyOutline, title: 'Tournaments', desc: 'Discover and track tournaments with updates.'
                },{
                  icon: IoBookOutline, title: 'Digital Diary', desc: 'Record activities and monitor progress.'
                },{
                  icon: IoCardOutline, title: 'Fees', desc: 'Pay via UPI, NetBanking, Cards, EMI and more.'
                },{
                  icon: IoCalendarOutline, title: 'Attendance', desc: 'See detailed attendance and history.'
                },{
                  icon: IoMegaphoneOutline, title: 'Notice Board', desc: 'Instant updates and holiday notices.'
                }].map(({icon:Icon,title,desc}) => (
                  <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-soft">
                    <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{title}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-12" />
              <PriceCard price={100} />
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                {[{
                  icon: IoCashOutline, title: "Fee Management", desc: "Collect and manage player fees efficiently."
                },{
                  icon: IoCalendarOutline, title: 'Attendance', desc: 'Manage attendance with detailed reports.'
                },{
                  icon: IoStatsChartOutline, title: 'Finances', desc: 'Dashboard view of academy finances.'
                },{
                  icon: IoClipboardOutline, title: 'Notice Board', desc: 'Communicate updates and holidays clearly.'
                },{
                  icon: IoPeopleOutline, title: 'Roster & Groups', desc: 'Organize players, batches and schedules.'
                }].map(({icon:Icon,title,desc}) => (
                  <div key={title} className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-soft">
                    <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">{title}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-300">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-12" />
              <PriceCard price={0} />
            </>
          )}
        </div>
      </TwProduct>
      </main>
    </SEOWrapper>
  );
};

export default Radlo;
