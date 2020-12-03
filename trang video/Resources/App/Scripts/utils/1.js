var isGetNotification = true;
var isNotCountComment = false;

var s3Storage = "";
var resourcePath = "/Themes/TheCodeCampPro/Resources";
var strAuthen = "";
var faceId = "648326032295473";
var isLoadedFacebook = "False";
if (strAuthen == "") {
  var googleId = "16523143533-ovv9lj8c7i8sv36sv3lguom0msmdk8ah.apps.googleusercontent.com";
}

if (strAuthen == "") {
  var LOGIN_VALIDATOR, SIGNUP_VALIDATOR;
  function openModal(tab) {
    $('#loginModal a[data-target="#' + tab + '"]').tab("show");
    switch (tab) {
      case "login":
        $(".btn--facebook").attr("title", "Đăng nhập bằng Facebook");
        $(".btn--google").attr("title", "Đăng nhập bằng Google");
        $("#loginModal .header-card").text("Đăng nhập tài khoản của bạn");
        SIGNUP_VALIDATOR && SIGNUP_VALIDATOR.resetForm();
        break;
      case "signup":
        $(".btn--facebook").attr("title", "Tiếp tục với Facebook");
        $(".btn--google").attr("title", "Tiếp tục với Google");
        $("#loginModal .header-card").text("Đăng ký tài khoản mới");
        LOGIN_VALIDATOR && LOGIN_VALIDATOR.resetForm();
        break;
    }
  }
}

if ("https://codelearn.io" == location.origin.toLocaleLowerCase()) {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", "UA-141685371-1");
  gtag("config", "USER_MANAGEMENT");
  gtag("set", { user_id: "CodeLearn-Anonymous" });

  // Measure Google Ads conversions
  gtag("event", "conversion", {
    send_to: "USER_MANAGEMENT/CodeLearn-Anonymous"
  });

  window["GoogleAnalyticsObject"] = "ga";
  window["ga"] =
    window["ga"] ||
    function () {
      (window["ga"].q = window["ga"].q || []).push(arguments);
    };
  ga("set", "userId", "CodeLearn-Anonymous");
}

window.fbAsyncInit = function () {
  FB.init({
    appId: faceId,
    xfbml: true,
    version: "v7.0"
  });
  FB.AppEvents.logPageView();
  isLoadedFacebook = true;
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
