import PropTypes from 'prop-types';

export default function Section({ id, children }) {
  return (
    <div id={id} className="w-full">
      {children}
    </div>
  );
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}; 