import HeroImg from "@/assets/images/hero.jpg";
import ResumeLogo from "@/assets/images/olova.png"; // Updated logo image

export default function About() {
  return (
    <>
      <section
        id="about"
        className="py-16 md:py-32 text-white bg-[#04081A]"
        aria-labelledby="about-heading"
      >
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2
            id="about-heading"
            className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white"
          >
            Python Developer, Data Enthusiast & AI Explorer
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Image Section */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b from-zinc-300 to-transparent aspect-[76/59] rounded-2xl p-px relative">
                <img
                  src={HeroImg}
                  alt="Pavani Pitti Illustration"
                  className="rounded-[15px] shadow block w-full h-auto"
                  width={1207}
                  height={929}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text Content Section */}
            <div className="relative space-y-6 md:space-y-8">
              <p>
                Hi! I’m <strong>Pavani Pitti</strong>, a detail-oriented B.Tech
                student specializing in Artificial Intelligence & Data Science.
                With a strong command of{" "}
                <strong>Python, Django, and web scraping</strong>, I’m passionate
                about building automation systems and intuitive backend
                architectures.
              </p>

              <p>
                My technical toolbox includes tools like BeautifulSoup, Selenium,
                REST API integration, and database management systems such as
                MySQL and MongoDB. I’ve worked on real-world projects involving
                data scraping, ERP systems, and full-stack development—including
                voice assistants and job portals.
              </p>

              <p>
                I’m currently seeking a part-time Python developer internship where
                I can continue contributing to smart data solutions and backend
                improvements—especially in areas like{" "}
                <strong>Google My Business scraping and backend automation</strong>.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                  <p>
                    I love solving logic-driven challenges and participating in
                    innovation fairs and hackathons—it’s where I get to combine
                    creativity with problem-solving. My long-term goal is to become
                    a skilled backend developer with expertise in AI & Machine
                    Learning, building systems that are efficient, ethical, and
                    impactful.
                  </p>

                  <footer className="mt-6 space-y-3">
                    <cite className="block font-medium not-italic">Pavani Pitti</cite>
                    <div className="flex items-center gap-2">
                      <img
                        src={ResumeLogo}
                        alt="Resume Icon"
                        className="h-5 w-auto"
                        loading="lazy"
                      />
                      <span>AI & Web Technology Enthusiast</span>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
