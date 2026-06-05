import CraftCard from "./CraftCard";

export default function CraftSection() {
  return (
    <section className="min-h-screen px-6 md:px-10 lg:px-2 py-0 w-full">
      <div
        className="
          w-full
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-2
          items-start
        "
      >
        <CraftCard
          video="/videos/craft6.mp4"
          poster="/images/craft6-poster.jpg"
          leftText="Gesture Navigation"
          rightText="March 2025"
        />

        <CraftCard
          video="/videos/craft4.mp4"
          poster="/images/craft4-poster.jpg"
          href="https://apps.apple.com/mx/app/atlas-of-moons/id1520266563?l=en-GB"
        />

        <CraftCard
          video="/videos/craft1.mp4"
          poster="/images/craft1-poster.jpg"
          leftText="Player Video UIKit"
          rightText="June 2024"
        />

        <CraftCard
          video="/videos/craft5.mp4"
          poster="/images/craft5-poster.jpg"
          href="https://apps.apple.com/mx/app/puzzle-merge/id6482997592?l=en-GB"
        />

        <CraftCard
          video="/videos/craft2.mp4"
          poster="/images/craft2-poster.jpg"
          leftText="Onboarding AppKit"
          rightText="April 2024"
          variant="fluid"
        />

        <CraftCard
          video="/videos/craft3.mp4"
          poster="/images/craft3-poster.jpg"
          leftText="Recording UI UIKit"
          rightText="February 2024"
          variant="fluid"
        />
      </div>
    </section>
  );
}
