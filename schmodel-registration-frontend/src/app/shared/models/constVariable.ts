export class TermsModalResponse {
  public static AGREE = 'agree';
  public static CLOSE = 'close';
  public static DECLINE = 'decline';
}

export class ValidationMessage {
  public static INVALID_EMAIL = 'Enter a valid email address';
  public static INVALID_PASSWORD_1 = 'Enter a valid password';
  public static INVALID_CREDENTIALS = 'Invalid Credentials';
  public static ALREADY_REGISTERED = 'You have already registered. Please login.';
  public static NON_MATCHING_PASSWORD = 'Passwords do not match';
  public static INVALID_PASSWORD = 'Password must be at least 6 characters';
  public static WRONG_ACTIVATION_CODE = 'Enter a valid activation code or register without an activation code';
  public static EMPTY_FIELDS = 'Please complete all the mandatory fields to register';
  public static ACCEPT_TERMS = 'Your Schmodel account has been created! Please complete your profile so you can start applying to jobs';
  public static DECLINE_TERMS = 'Your Schmodel account can be created only if you agree to Terms & Conditions';
  public static LOGOUT = 'Are you sure you want to logout?';
  public static TERMS_CONTENT = 'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containi ' +
                                'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containing' +
                                ' the specific terms of the booking, must be signed and returned by the client and the signed booking ' +
                                'confirmation form together with these terms and conditions shall form the agreement between ' +
                                'the parties relating to each booking. The failure to sign and/or return the booking confirmation ' +
                                'form whilst proceeding with the booking will be deemed to be an acceptance by the client of these terms ' +
                                ' and conditions and they shall apply to and govern the booking between Schmodel and the client. ' +
                                ' Any amendment and/or variations made to the booking confirmation form by the client shall not be ' +
                                'valid and binding unless IMG has agreed to such amendment and/or variation in advance and confirmed ' +
                                'such agreement by signing the booking confirmation form after the amendment and/or variation has been ' +
                                'included on the booking confirmation form. In the event of any inconsistency or contradiction between ' +
                                'these terms and conditions and the booking confirmation form, the terms set out in the booking' +
                                ' confirmation form shall prevail.';
}
