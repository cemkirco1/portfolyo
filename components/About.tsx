import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="Web Design"
            icon="/icons/code.svg"
            description="I develop Front-End with coding super smooth."
            projectLink="https://github.com/cemkirco1"
          />
          <AboutCard
            title="Mobile"
            icon="/icons/phone.svg"
            description="I develop cross-platform mobile applications."
            projectLink="https://github.com/cemkirco1"
          />
          <AboutCard
            title="Social Media Management"
            icon="/icons/design.svg"
            description="I create social media content with unique ideas."
            projectLink="https://www.instagram.com/uretkenakademi/"
          />
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">Introduce</h5>
          <h1 className="white">Hello, I&#39;m Cem Kırkoyun</h1>
          <h3 className="white">
            Design is not just what it looks like. Design is how it works!
          </h3>
          <p className="gray">
            I&apos;m Cem Kirkoyun, a Software Developer with over 5 years of
            experience in mobile and web application development. I&apos;m
            proficient in Swift, React, React-Native, Next, JavaScript,
            TypeScript, Tailwind CSS, and Bootstrap. I&apos;ve worked in various
            roles, from Junior Software Developer at Scode App to Junior
            Frontend Developer at Boranka Teknoloji, and I&apos;m always eager
            to learn new technologies. In my spare time, I enjoy football,
            photography, hiking, and astronomy. I&apos;m passionate about
            creating impactful software solutions and contributing to the future
            of technology.
          </p>
        </div>
      </div>

      {/**
   *     <div className="flex partners justify-space">
        <Image
          src="/images/partners/wallety.png"
          height={45}
          width={180}
          alt="wallety"
        />
        <Image
          src="/images/partners/artisty.png"
          height={45}
          width={180}
          alt="artisty"
        />
        <Image
          src="/images/partners/khedma-lik.png"
          height={45}
          width={180}
          alt="khedma-lik"
        />
        <Image
          src="/images/partners/directy.png"
          height={45}
          width={180}
          alt="directy"
        />
        <Image
          src="/images/partners/telefy.png"
          height={45}
          width={180}
          alt="telefy"
        />
      </div>
   */}
    </section>
  );
}

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  projectLink: string;
};

function AboutCard({ title, icon, description, projectLink }: Props) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>

      <a
        className="green"
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        Look Projects...
      </a>
    </div>
  );
}
