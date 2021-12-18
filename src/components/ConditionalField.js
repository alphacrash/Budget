/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function ConditionalField(props) {
  const findOnePerson = (person) => person.personId === props.personId;

  const displayDynamicQuestion = () => {
    let result = true;
    if (typeof props.dynamicQuestions !== 'undefined') {
      const person = props.dynamicQuestions.persons.find(findOnePerson);
      if (
        typeof person !== 'undefined' &&
        props.dynamicQuestions.persons !== null &&
        Array.isArray(props.dynamicQuestions.persons) &&
        props.personId !== null
      ) {
        const { hiddenFields } = person;
        if (hiddenFields !== null) {
          hiddenFields.forEach((fieldName) => {
            if (props.dynamicQuestionId === hiddenFields[fieldName]) {
              result = false;
            }
          });
        }
      }
      return result;
    }
    return result;
  };

  if (props.condition && props.onShow && displayDynamicQuestion())
    props.onShow();

  const displayDynamicQuestionRequired =
    props.condition && displayDynamicQuestion();

  return (
    <CSSTransition
      classNames="conditional-field fade-appear"
      timeout={5000}
      exit={false}
    >
      <div>{displayDynamicQuestionRequired ? props.children : null}</div>
    </CSSTransition>
  );
}

ConditionalField.propTypes = {
  condition: PropTypes.bool.isRequired,
  onShow: PropTypes.func
};

ConditionalField.defaultProps = {
  onShow: () => {}
};

export default ConditionalField;
