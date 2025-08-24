import React from "react";

export enum TwFeatureType {
  IMAGE = "IMAGE",
}

export enum TwItemPlacement {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

interface Props {
  name: string;
  description: string;
  featureUrl?: string;
  featureType?: TwFeatureType;
  featurePlacement?: TwItemPlacement;
}

export default function FeatureSection({ name, description, featureUrl, featureType = TwFeatureType.IMAGE, featurePlacement = TwItemPlacement.RIGHT }: Props) {
  const ImageBlock = () => (
    <div className="w-full">
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
        {featureType === TwFeatureType.IMAGE && featureUrl && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={featureUrl} alt={name} className="h-full w-full object-cover" />
        )}
      </div>
    </div>
  );

  const TextBlock = () => (
    <div className="w-full">
      <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
    </div>
  );

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center`}>
          {featurePlacement === TwItemPlacement.LEFT ? (
            <>
              <ImageBlock />
              <TextBlock />
            </>
          ) : (
            <>
              <TextBlock />
              <ImageBlock />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

