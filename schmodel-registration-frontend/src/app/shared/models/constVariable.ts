export class TermsModalResponse {
  public static AGREE = 'agree';
  public static CLOSE = 'close';
  public static DECLINE = 'decline';
}

export class ValidationMessage {
  public static GENERIC_ERROR_MESSAGE = 'Something went wrong.';
  public static BACKEND_CONNECTION_ERROR = 'We\'re experiencing technical difficulties. ' +
    'We\'ve logged this error and we\'ll be working to fix it right away. Please try again later.';
  public static INVALID_EMAIL = 'Enter a valid email address';
  public static INVALID_PASSWORD_1 = 'Enter a valid password';
  public static INVALID_CREDENTIALS = 'Invalid Credentials';
  public static ALREADY_REGISTERED = 'You have already registered. Please login.';
  public static NON_MATCHING_PASSWORD = 'Passwords do not match';
  public static INVALID_PASSWORD = 'Password must be at least 6 characters';
  public static WRONG_ACTIVATION_CODE = 'Enter a valid activation code or register without an activation code';
  public static EMPTY_FIELDS = 'Please complete all the mandatory fields to register';
  public static RESET_TOKEN_EXPIRE = 'The link to reset your password has expired, please try again below ';
  public static BEFORE_COMPLETE_HOME_TITLE = 'Please complete your profile so you can start applying to jobs';
  public static BEFORE_COMPLETE_HOME_TITLE_ONCE_SIGNUP = `Your Schmodel account has been created!\nPlease complete your profile so you can start applying to jobs`;
  public static DECLINE_TERMS = 'Your Schmodel account can be created only if you agree to Terms & Conditions';
  public static LOGOUT = 'Are you sure you want to logout?';
  public static EDIT_PROFILE_PHOTO_UPLOAD_ERROR = 'We can only accept photos smaller than 5MB. Please select another photo and try again.';
  public static TERMS_CONDITIONS_DECLINE = 'Your Schmodel account can be created only if you agree to Terms & Conditions';
  public static CURRENT_PASSWORD_NOT_MATCH = 'The current password you entered does not match our records';
  public static TERMS_CONTENT = 'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containing' +
    ' the specific terms of the booking, must be signed and returned by the client and the signed booking ' +
    'confirmation form together with these terms and conditions shall form the agreement between ' +
    'the parties relating to each booking. \n\n' +
    'The failure to sign and/or return the booking confirmation ' +
    'form whilst proceeding with the booking will be deemed to be an acceptance by the client of these terms ' +
    ' and conditions and they shall apply to and govern the booking between Schmodel and the client. ' +
    ' Any amendment and/or variations made to the booking confirmation form by the client shall not be ' +
    'valid and binding unless IMG has agreed to such amendment and/or variation in advance and confirmed ' +
    'such agreement by signing the booking confirmation form after the amendment and/or variation has been ' +
    'included on the booking confirmation form. In the event of any inconsistency or contradiction between ' +
    'these terms and conditions and the booking confirmation form, the terms set out in the booking' +
    ' confirmation form shall prevail.';
  public static FAIL_GET_APPLY_FOR_JOBS = 'The page could not be loaded. Please log out, log in again and try once more.';
  public static FAIL_CREATE_APPLICATION = 'The application could not be created. Please log out, log in again and try once more.';
  public static FAIL_WITHDRAW_APPLICATION = 'The application could not be withdrawn. Please log out, log in again and try once more.';
  public static DOUBLE_LIKE_ERROR = `Schmodel's can only be hired for one position, please update.`;
  public static NO_LIKE_ERROR_BEFORE_HIRE = 'Schmodels can only be hired for one position, per event. Please like this Schmodel for a single position and then click Hire.';
}

export class ErrorResponse {
  public static TOKEN_EXPIRE = 'io.jsonwebtoken.ExpiredJwtException';
}
