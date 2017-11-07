export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      const config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
        'invalidPhoneNumber': 'Invalid Phone Number',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
      };
      return config[validatorName];
    }
    static emailValidator(control) {
      // RFC 2822 compliant regex
      // tslint:disable-next-line:max-line-length
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
  }
