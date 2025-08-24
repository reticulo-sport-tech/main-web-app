import { SEOWrapper } from "@/components/SEO";

export default function Demo() {
  const videos = [
    { title: "Register and Login", src: "/Register-Login-Demo.mp4" },
    { title: "Information Panel", src: "/Information-Demo.mp4" },
    { title: "Create Board", src: "/Create-Board-Demo.mp4" },
    { title: "Using Shapes", src: "/UseShapes-Demo.mp4" },
    { title: "Using Controls", src: "/UseControls-Demo.mp4" },
  ];
  return (
    <SEOWrapper title="Radlo Demo | Reticulo">
      <main className="pt-20">
        <section className="py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-center">Radlo Demos</h1>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((v) => (
                <div key={v.title} className="rounded-xl border border-slate-200 p-4 shadow-soft bg-white">
                  <div className="font-medium mb-2">{v.title}</div>
                  <div className="aspect-video overflow-hidden rounded-lg bg-slate-100">
                    <video src={v.src} controls className="h-full w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SEOWrapper>
  );
}

