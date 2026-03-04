import BorderModern from "@/components/utils/BorderModern";
import SectionHeader from "../SectionHeader";
import StackGroup from "./StackGroup";
import { techStack } from "./stackData";

export default function TechStackSection() {
  return (
    <section className="pb-5 bg-primary">

      <div className="max-w-7xl mx-auto px-5">

          <SectionHeader
            title="Tech Stack"
            subtitle=" Technologies and tools I use to design , build and scale modern applications."
            />

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

          <br /><br />
      <BorderModern/>

    </section>
  );
}