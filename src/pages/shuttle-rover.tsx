import { SEOWrapper } from "@/components/SEO";
import TwProduct from "@/components/tw/Product";
import { IoGitNetworkOutline, IoCubeOutline, IoFitnessOutline, IoRocketOutline } from "react-icons/io5";
import Image from "next/image";

const ShuttleRover = () => {
  return (
    <SEOWrapper
      title="Reticulo | Shuttle Rover"
      description={
        "Shuttle Rover is a hardware shuttlecock shooter for feeding, powered by state-of-the-art AI with 9 independent directions of motion and over 100-shuttle capacity in an ultra-portable setup under 5 kg."
      }
    >
      <main className="pt-20">
        <TwProduct
          name={"Shuttle Rover"}
          icon={<Image src="/shuttle-rover/logo.svg" alt="Shuttle Rover logo" width={28} height={28} className="h-7 w-7" />}
          simpleDescription={"AI-Powered Shuttlecock Shooter"}
          description={
            "A hardware-based product line focusing on reliable, portable feeding machines using modern AI algorithms — 9-axis motion, 100+ shuttle capacity, and under 5 kg weight for easy transport and setup."
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[{
              icon: IoGitNetworkOutline,
              title: '9 Independent Directions',
              desc: 'Precision feeding across court zones.'
            },{
              icon: IoCubeOutline,
              title: '100+ Shuttle Capacity',
              desc: 'Extended sessions without frequent reloads.'
            },{
              icon: IoFitnessOutline,
              title: 'AI-Controlled Feeding',
              desc: 'Consistency, speed profiles and shot patterns.'
            },{
              icon: IoRocketOutline,
              title: 'Ultra Portable (< 5 kg)',
              desc: 'Compact, easy to carry and set up.'
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
        </TwProduct>
      </main>
    </SEOWrapper>
  );
};

export default ShuttleRover;
