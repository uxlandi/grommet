import { describe, PropTypes } from 'react-desc';
export var doc = function doc(Tab) {
  var DocumentedTab = describe(Tab).description('One tab within Tabs.').usage("import { Tab } from 'grommet';\n<Tab />");
  DocumentedTab.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).description('The title of the tab.')
  };
  return DocumentedTab;
};