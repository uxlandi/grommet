function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { genericProps, getAvailableAtBadge } from '../../utils';
export var doc = function doc(WorldMap) {
  var DocumentedWorldMap = describe(WorldMap).availableAt(getAvailableAtBadge('WorldMap')).description('A map of the world, or a continent.').usage("import { WorldMap } from 'grommet';\n<WorldMap />");
  DocumentedWorldMap.propTypes = _extends({}, genericProps, {
    color: PropTypes.string.description('Default color'),
    continents: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.oneOf(['Africa', 'Asia', 'Australia', 'Europe', 'North America', 'South America']).isRequired,
      onClick: PropTypes.func,
      onHover: PropTypes.func
    })).description('Continent details.'),
    onSelectPlace: PropTypes.func.description("Called when the user clicks on a place.\n        It is passed the location."),
    places: PropTypes.arrayOf(PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.string,
      // for a11y aria-label
      location: PropTypes.arrayOf(PropTypes.number).isRequired,
      onClick: PropTypes.func,
      onHover: PropTypes.func
    })).description('Place details.'),
    hoverColor: PropTypes.string.description('Color when hovering over places while selecting.')
  });
  return DocumentedWorldMap;
};