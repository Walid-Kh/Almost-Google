import { FeatureCard } from "@/components/FeaturesCard";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
  return (
    <>
      <section className="flex lg:flex-row flex-col gap-8">
        <FeatureCard
          title="Sorta-Intelligent Search"
          text="Our search algorithm is almost smart enough to understand what you're looking for. It's like having an assistant who's only half paying attention, but hey, we try our best!"
          image={
            <img
              src="https://i.imgur.com/S0hlO03.png"
              alt="brain"
              className="w-16"
            />
          }
        />
        <FeatureCard
          title="Voice Search "
          text="Our voice recognition feature is a hit or miss. We'll do our best to understand your commands, but sometimes we might misinterpret them. It's like having a friendly but slightly forgetful assistant."
          image={
            <img
              src="https://i.imgur.com/kTH5Q23.png"
              alt="Microphone"
              className="w-16"
            />
          }
        />
        <FeatureCard
          title="Sorta-Intelligent Search"
          text="Our search algorithm is almost smart enough to understand what you're looking for. It's like having an assistant who's only half paying attention, but hey, we try our best!"
          image={
            <img
              src="https://i.imgur.com/Lb3sr4d.png"
              alt="dice"
              className="w-16"
            />
          }
        />
      </section>
      
    </>
  );
}
