import StackGroup from "./StackGroup";
import { techStack } from "./stackData";

export default function TechStackSection() {
  return (
    <section className="py-10 bg-background">

      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Tech Stack
          </h2>

          <p className="text-muted-foreground mt-3">
            Technologies and tools I use to design,
            build and scale modern applications.
          </p>
        </div>

        <div className="
          grid
          gap-10
          md:grid-cols-2
        ">
          {techStack.map((stack) => (
            <StackGroup
              key={stack.category}
              {...stack}
            />
          ))}
        </div>

      </div>

    </section>
  );
}