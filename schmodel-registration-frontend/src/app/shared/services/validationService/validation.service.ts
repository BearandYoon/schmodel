import { ValidationMessage } from '../../../shared/models';

export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': 'Required.',
      'notMatchingPassword': ValidationMessage.NON_MATCHING_PASSWORD,
      'invalidEmailAddress': ValidationMessage.INVALID_EMAIL,
      'invalidPassword': ValidationMessage.INVALID_PASSWORD,
      'currentPasswordNotMatching': ValidationMessage.CURRENT_PASSWORD_NOT_MATCH,
      'minlength': `Minimum length ${validatorValue.requiredLength}.`
    };
    return config[validatorName];
  }

  static emailValidator(control) {
    const value = control.value.toLowerCase();
    // RFC 2822 compliant regex
    const result = value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    if (result && value && (result[0].length === value.length)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static passwordSpecialValidator(control) {
    if (control.value.match(/[^a-zA-Z0-9!£$%^&*()_\-=+{}[\]:@~#,.<>/?\\|]/)) {
      return true;
    } else {
      return null;
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  static passwordLengthValidator(control) {
    if (control.value.length >= 6) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
}
