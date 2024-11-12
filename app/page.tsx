import Image from "next/image";

export default function Page() {
  return (
    <section>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5"
          unoptimized
          width={160}
          height={160}
          priority
        />

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        1st semester Software Engineer!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a 19-year old Software engineering student at SDU Sønderborg.
        </p>
        <p>
          Starting with basic projects in C#, I have gained a fair bit of experience in software development in the past two years by myself.
          Feel free to take a look at my Projects page to get an insight into the work I've done thus far.
        </p>
        <p>
          If you want to reach out to me, I'd love to get a message on any of the social media platforms I have linked below.
        </p>
        
      </div>
    </section>
  );
}
