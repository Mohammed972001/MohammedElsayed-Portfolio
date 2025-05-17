import Tools from './Tools.jsx';

export default function About() {
  return (
    <>
      <div className='w-2/3 mx-auto mt-10 mb-20 text-white bg-[#2f2e31] rounded-2xl'>
        <p className="py-8 text-lg px-11">
          Welcome! I'm Mohammed, a professional web developer with a knack for crafting
          visually stunning and highly functional websites. Combining creativity and
          technical expertise, I transform your vision into digital masterpieces that excel
          in both appearance and performance.
        </p>
        <div className="flex pb-8 space-x-6 px-11 md:space-x-12">
          <div>
            <p className="text-4xl font-bold">6+</p>
            <p className="text-sm text-gray-400">Project done</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1+</p>
            <p className="text-sm text-gray-400">Years of experience</p>
          </div>
        </div>
      </div>

      <Tools />
    </>
  );
} 