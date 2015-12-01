Accounts.oauth.registerService('saml2');

if (Meteor.isClient) {

  Meteor.loginWithSaml2 = function (options, callback) {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }
    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Saml2.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {

  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.saml2'],
    forOtherUsers: ['services.saml2.id', 'services.saml2.name', 'services.saml2.photo']
  });
}