import Tools from './Tools.jsx';

export default function About() {
  return (
    <section className="w-full" aria-labelledby="about-heading">
      <article className='w-2/3 mx-auto mt-10 mb-20 text-white bg-[#2f2e31] rounded-2xl'>
        <header>
          <h2 id="about-heading" className="sr-only">About Mohammed</h2>
        </header>
        
        <div className="px-5 py-8 md:px-11">
          <p className="text-lg leading-relaxed">
            Welcome! I&apos;m <strong>Mohammed</strong>, a professional web developer with a knack for crafting
            visually stunning and highly functional websites. Combining creativity and
            technical expertise, I transform your vision into digital masterpieces that excel
            in both appearance and performance.
          </p>
          
          {/* Statistics Section */}
          <section className="flex pt-8 pb-8 space-x-6 md:space-x-12" aria-label="Professional Statistics">
            <div className="text-center">
              <p className="text-4xl font-bold text-sky-400" aria-label="Number of projects completed">8+</p>
              <p className="text-sm text-gray-400">Projects Done</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-sky-400" aria-label="Years of experience">1+</p>
              <p className="text-sm text-gray-400">Years of Experience</p>
            </div>
          </section>
        </div>
      </article>

      {/* Tools Section */}
      <section aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="sr-only">Technologies and Tools</h2>
        <Tools />
      </section>
    </section>
  );
} 