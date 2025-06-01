import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl mx-auto w-full px-4 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl font-bold leading-tight text-gray-900">
              Welcome to Your Event HQ. <br />
              <span className="text-primary-500">Create, Organize, Celebrate.</span>
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Event Planning Made Simple. Host Seamlessly, Grow Effortlessly. Set the Stage for Something Great!!
            </p>

            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore</Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.ico"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="text-3xl font-bold text-gray-900">
         Evo Event Ally <br /> Your Vision, Our Expertise: Events you can Trust
        </h2>
      </section>
      <div className="flex w-full flex-col gap-5 md:flex-row">
        Search 
        CategoryFilter
      </div>

    </>
  );
}

