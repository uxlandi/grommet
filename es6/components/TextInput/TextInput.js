function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component, isValidElement } from 'react';
import { compose } from 'recompose';
import styled from 'styled-components';
import { Box } from '../Box';
import { Button } from '../Button';
import { Drop } from '../Drop';
import { InfiniteScroll } from '../InfiniteScroll';
import { Keyboard } from '../Keyboard';
import { withAnnounce, withFocus, withForwardRef, withTheme } from '../hocs';
import { StyledTextInput, StyledTextInputContainer, StyledPlaceholder, StyledSuggestions } from './StyledTextInput';

function renderLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    return suggestion.label || suggestion.value;
  }

  return suggestion;
}

function stringLabel(suggestion) {
  if (suggestion && typeof suggestion === 'object') {
    if (suggestion.label && typeof suggestion.label === 'string') {
      return suggestion.label;
    }

    return suggestion.value;
  }

  return suggestion;
}

var ContainerBox = styled(Box).withConfig({
  displayName: "TextInput__ContainerBox",
  componentId: "sc-1ai0c08-0"
})(["max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}"]);

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TextInput, _Component);

  function TextInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeSuggestionIndex: -1,
      inputRef: React.createRef(),
      showDrop: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announce", function (message, mode) {
      var _this$props = _this.props,
          announce = _this$props.announce,
          suggestions = _this$props.suggestions;

      if (suggestions && suggestions.length > 0) {
        announce(message, mode);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceSuggestionsCount", function () {
      var _this$props2 = _this.props,
          suggestions = _this$props2.suggestions,
          suggestionsCount = _this$props2.messages.suggestionsCount;

      _this.announce(suggestions.length + " " + suggestionsCount);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceSuggestionsExist", function () {
      var suggestionsExist = _this.props.messages.suggestionsExist;

      _this.announce(suggestionsExist);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceSuggestionsIsOpen", function () {
      var suggestionIsOpen = _this.props.messages.suggestionIsOpen;

      _this.announce(suggestionIsOpen);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "announceSuggestion", function (index) {
      var _this$props3 = _this.props,
          suggestions = _this$props3.suggestions,
          enterSelect = _this$props3.messages.enterSelect;

      if (suggestions && suggestions.length > 0) {
        var labelMessage = stringLabel(suggestions[index]);

        _this.announce(labelMessage + " " + enterSelect);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetSuggestions", function () {
      // delay this to avoid re-render interupting event delivery
      // https://github.com/grommet/grommet/issues/2154
      // 10ms was chosen empirically based on ie11 using TextInput
      // with and without a FormField.
      clearTimeout(_this.resetTimer);
      _this.resetTimer = setTimeout(function () {
        var suggestions = _this.props.suggestions;

        if (suggestions && suggestions.length) {
          _this.setState({
            activeSuggestionIndex: -1,
            showDrop: true,
            selectedSuggestionIndex: -1
          }, _this.announceSuggestionsCount);
        }
      }, 10);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getSelectedSuggestionIndex", function () {
      var _this$props4 = _this.props,
          suggestions = _this$props4.suggestions,
          value = _this$props4.value;
      var suggestionValues = suggestions.map(function (suggestion) {
        if (typeof suggestion === 'object') {
          return suggestion.value;
        }

        return suggestion;
      });
      return suggestionValues.indexOf(value);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onShowSuggestions", function () {
      // Get values of suggestions, so we can highlight selected suggestion
      var selectedSuggestionIndex = _this.getSelectedSuggestionIndex();

      _this.setState({
        showDrop: true,
        activeSuggestionIndex: -1,
        selectedSuggestionIndex: selectedSuggestionIndex
      }, _this.announceSuggestionsIsOpen);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNextSuggestion", function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state = _this.state,
          activeSuggestionIndex = _this$state.activeSuggestionIndex,
          showDrop = _this$state.showDrop;

      if (suggestions && suggestions.length > 0) {
        if (!showDrop) {
          _this.onShowSuggestions();
        } else {
          event.preventDefault();
          var index = Math.min(activeSuggestionIndex + 1, suggestions.length - 1);

          _this.setState({
            activeSuggestionIndex: index
          }, function () {
            return _this.announceSuggestion(index);
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPreviousSuggestion", function (event) {
      var suggestions = _this.props.suggestions;
      var _this$state2 = _this.state,
          activeSuggestionIndex = _this$state2.activeSuggestionIndex,
          showDrop = _this$state2.showDrop;

      if (suggestions && suggestions.length > 0 && showDrop) {
        event.preventDefault();
        var index = Math.max(activeSuggestionIndex - 1, 0);

        _this.setState({
          activeSuggestionIndex: index
        }, function () {
          return _this.announceSuggestion(index);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickSuggestion", function (suggestion) {
      var onSelect = _this.props.onSelect;
      var inputRef = _this.state.inputRef;

      _this.setState({
        showDrop: false
      });

      if (onSelect) {
        onSelect({
          target: inputRef.current,
          suggestion: suggestion
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSuggestionSelect", function (event) {
      var _this$props5 = _this.props,
          onSelect = _this$props5.onSelect,
          suggestions = _this$props5.suggestions;
      var _this$state3 = _this.state,
          activeSuggestionIndex = _this$state3.activeSuggestionIndex,
          inputRef = _this$state3.inputRef;

      _this.setState({
        showDrop: false
      });

      if (activeSuggestionIndex >= 0) {
        event.preventDefault(); // prevent submitting forms

        var suggestion = suggestions[activeSuggestionIndex];

        if (onSelect) {
          onSelect({
            target: inputRef.current,
            suggestion: suggestion
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function (event) {
      var _this$props6 = _this.props,
          onFocus = _this$props6.onFocus,
          suggestions = _this$props6.suggestions;

      if (suggestions && suggestions.length > 0) {
        _this.announceSuggestionsExist();
      }

      _this.resetSuggestions();

      if (onFocus) {
        onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function (event) {
      var onBlur = _this.props.onBlur;
      clearTimeout(_this.resetTimer);

      if (onBlur) {
        onBlur(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      var onChange = _this.props.onChange;

      _this.resetSuggestions();

      if (onChange) {
        onChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropClose", function () {
      _this.setState({
        showDrop: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderSuggestions", function () {
      var _this$props7 = _this.props,
          suggestions = _this$props7.suggestions,
          theme = _this$props7.theme;
      var _this$state4 = _this.state,
          activeSuggestionIndex = _this$state4.activeSuggestionIndex,
          selectedSuggestionIndex = _this$state4.selectedSuggestionIndex;
      return React.createElement(StyledSuggestions, {
        theme: theme
      }, React.createElement(InfiniteScroll, {
        items: suggestions,
        step: theme.select.step
      }, function (suggestion, index) {
        var plain = typeof suggestion === 'object' && typeof isValidElement(suggestion.label);
        return React.createElement("li", {
          key: stringLabel(suggestion) + "-" + index
        }, React.createElement(Button, {
          active: activeSuggestionIndex === index || selectedSuggestionIndex === index,
          fill: true,
          hoverIndicator: "background",
          onClick: function onClick() {
            return _this.onClickSuggestion(suggestion);
          }
        }, plain ? renderLabel(suggestion) : React.createElement(Box, {
          align: "start",
          pad: "small"
        }, renderLabel(suggestion))));
      }));
    });

    return _this;
  }

  TextInput.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var forwardRef = nextProps.forwardRef,
        suggestions = nextProps.suggestions;
    var inputRef = prevState.inputRef,
        showDrop = prevState.showDrop;
    var nextInputRef = forwardRef || inputRef;
    var newState = {};

    if (nextInputRef !== inputRef) {
      newState.inputRef = nextInputRef;
    }

    if (showDrop && (!suggestions || !suggestions.length)) {
      newState.showDrop = false;
    }

    return Object.keys(newState) ? newState : null;
  };

  var _proto = TextInput.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    var _this$props8 = this.props,
        onSuggestionsOpen = _this$props8.onSuggestionsOpen,
        onSuggestionsClose = _this$props8.onSuggestionsClose,
        suggestions = _this$props8.suggestions;
    var showDrop = this.state.showDrop;

    if (showDrop !== prevState.showDrop) {
      if (showDrop && onSuggestionsOpen) {
        onSuggestionsOpen();
      } else if (onSuggestionsClose) {
        onSuggestionsClose();
      }
    }

    if (!showDrop && suggestions && (!prevProps.suggestions || !prevProps.suggestions.length)) {
      this.resetSuggestions();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.resetTimer);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props9 = this.props,
        defaultValue = _this$props9.defaultValue,
        dropAlign = _this$props9.dropAlign,
        dropTarget = _this$props9.dropTarget,
        id = _this$props9.id,
        placeholder = _this$props9.placeholder,
        plain = _this$props9.plain,
        theme = _this$props9.theme,
        value = _this$props9.value,
        onKeyDown = _this$props9.onKeyDown,
        rest = _objectWithoutPropertiesLoose(_this$props9, ["defaultValue", "dropAlign", "dropTarget", "id", "placeholder", "plain", "theme", "value", "onKeyDown"]);

    delete rest.onChange; // se we can manage in this.onChange()

    delete rest.forwardRef;
    delete rest.onSuggestionsOpen;
    delete rest.onSuggestionsClose;
    var _this$state5 = this.state,
        inputRef = _this$state5.inputRef,
        showDrop = _this$state5.showDrop; // needed so that styled components does not invoke
    // onSelect when text input is clicked

    delete rest.onSelect;
    var drop;

    if (showDrop) {
      drop = React.createElement(Drop, {
        id: id ? "text-input-drop__" + id : undefined,
        align: dropAlign,
        responsive: false,
        target: dropTarget || inputRef.current,
        onClickOutside: function onClickOutside() {
          return _this2.setState({
            showDrop: false
          });
        },
        onEsc: function onEsc() {
          return _this2.setState({
            showDrop: false
          });
        }
      }, React.createElement(ContainerBox, {
        overflow: "auto"
      }, this.renderSuggestions()));
    }

    return React.createElement(StyledTextInputContainer, {
      plain: plain
    }, placeholder && typeof placeholder !== 'string' && !value ? React.createElement(StyledPlaceholder, {
      theme: theme
    }, placeholder) : null, React.createElement(Keyboard, {
      onEnter: this.onSuggestionSelect,
      onEsc: this.onDropClose,
      onTab: this.onDropClose,
      onUp: this.onPreviousSuggestion,
      onDown: this.onNextSuggestion,
      onKeyDown: onKeyDown
    }, React.createElement(StyledTextInput, _extends({
      id: id,
      ref: inputRef,
      autoComplete: "off",
      plain: plain,
      placeholder: typeof placeholder === 'string' ? placeholder : undefined,
      theme: theme
    }, rest, {
      defaultValue: renderLabel(defaultValue),
      value: renderLabel(value),
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      onChange: this.onChange
    }))), drop);
  };

  return TextInput;
}(Component);

_defineProperty(TextInput, "defaultProps", {
  dropAlign: {
    top: 'bottom',
    left: 'left'
  },
  messages: {
    enterSelect: '(Press Enter to Select)',
    suggestionsCount: 'suggestions available',
    suggestionsExist: 'This input has suggestions use arrow keys to navigate',
    suggestionIsOpen: 'Suggestions drop is open, continue to use arrow keys to navigate'
  }
});

var TextInputDoc;

if (process.env.NODE_ENV !== 'production') {
  TextInputDoc = require('./doc').doc(TextInput); // eslint-disable-line global-require
}

var TextInputWrapper = compose(withFocus, withTheme, withAnnounce, withForwardRef)(TextInputDoc || TextInput);
export { TextInputWrapper as TextInput };