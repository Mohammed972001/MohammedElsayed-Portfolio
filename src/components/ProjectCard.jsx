import PropTypes from 'prop-types';

export default function ProjectCard({ image, title, tags, codeLink, liveLink }) {
  return (
    <div className="flex flex-col rounded-xl bg-[#2f2e31] p-3 my-6 mx-3">
      <img className="w-full rounded-lg" src={image} alt={title} />
      <p className="py-3 text-xl text-start">{title}</p>
      <div className="flex w-full">
        <div className="flex flex-wrap w-1/2 gap-2">
          {tags.map((tag, index) => (
            <p key={index} className="px-2 py-1 border rounded-lg shadow-xl border-neutral-700">
              {tag}
            </p>
          ))}
        </div>
        <div className="flex justify-end w-1/2 space-x-2">
          <a
            target="_blank"
            href={codeLink}
            className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
            rel="noreferrer"
          >
            code
          </a>
          <a
            target="_blank"
            href={liveLink}
            className="px-3 py-1 rounded-lg bg-sky-400 w-fit"
            rel="noreferrer"
          >
            live
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  codeLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired
}; 