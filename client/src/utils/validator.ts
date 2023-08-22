/* eslint-disable indent */
export type ValidationRule = string;

type RuleProperties = {
  message: string;
  value?: number;
};

type InputName = string;

export type ValidatorConfig = {
  [inputName: InputName]: {
    [key in ValidationRule]?: RuleProperties;
  };
};

type InputType = string | number | boolean | object;

export type Data = {
  [inputName: InputName]: InputType;
};

export function validator(data: Data, config: ValidatorConfig) {
  const errors: { [inputName: InputName]: string } = {};

  function validate(
    validateMethod: ValidationRule,
    currentData: InputType,
    currentRule: RuleProperties
  ) {
    let statusValidate: boolean;

    switch (validateMethod) {
      case 'isRequired': {
        if (typeof currentData === 'boolean') {
          statusValidate = !currentData;
        } else if (typeof currentData === 'string') {
          statusValidate = currentData.trim() === '';
        }

        break;
      }
      case 'isEmail': {
        if (typeof currentData === 'string') {
          const emailRegExp = /^\S+@\S+\.\S+$/g;
          statusValidate = !emailRegExp.test(currentData);
        }

        break;
      }
      case 'isCapitalSymbol': {
        if (typeof currentData === 'string') {
          const capitalRegExp = /[A-Z]+/g;
          statusValidate = !capitalRegExp.test(currentData);
        }

        break;
      }
      case 'isContainDigit': {
        if (typeof currentData === 'string') {
          const digitRegExp = /\d+/g;
          statusValidate = !digitRegExp.test(currentData);
        }

        break;
      }
      case 'min': {
        if (typeof currentData === 'string') {
          statusValidate = currentData.length < currentRule.value;
        }
        break;
      }
      case 'isNumber': {
        if (typeof currentData === 'number') {
          statusValidate = isNaN(currentData);
        } else {
          statusValidate = false;
        }

        break;
      }
      case 'isNotPositiveNumber': {
        if (typeof currentData === 'number') {
          statusValidate = currentData <= 0;
        } else if (typeof currentData === 'string') {
          statusValidate = parseInt(currentData) <= 0;
        }

        break;
      }
      default:
        break;
    }
    if (statusValidate) return currentRule.message;
  }

  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
