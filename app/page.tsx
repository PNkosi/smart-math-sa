import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>SmartMathSA&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Master&nbsp;</h1>
        <br />
        <h1 className={title()}>Mathematics With Confidence</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Unlock Your Potential in Mathematics with Interactive Learning
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href="/login"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Create account
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={"/learning"}
        >
          Dive head first!
        </Link>
      </div>
    </section>
  );
}
