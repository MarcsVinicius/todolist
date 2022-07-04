import React from 'react';
import PropTypes from 'prop-types';

export default function Tasks({ allTasks }) {
  return (
    <div>
      { allTasks }
    </div>
  );
}

Tasks.propTypes = {
  allTasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    state: PropTypes.string,
    created: PropTypes.string,
  })).isRequired,
};
