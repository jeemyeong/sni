

(function(i,s,o,g,r,a,m){
  if(i[g]){return;}
  i[g] = {};
  if(!Array.prototype.indexOf){Array.prototype.indexOf=function(a,b){for(var i=(b||0),j=this.length;i<j;i++){if(this[i]===a){return i}}return-1}}
  function getCookieNoescape(a){var b=a+"=";var c=s.cookie;if(c.length>0){startIndex=c.indexOf(a);if(startIndex!=-1){startIndex+=a.length;endIndex=c.indexOf(";",startIndex);if(endIndex==-1)endIndex=c.length;return c.substring(startIndex+1,endIndex)}}return false}
  function getCookie(a){var b=getCookieNoescape(a);if(b){return unescape(b)}return false}
  

  i[g].init = function(username, user_name){
    if(username){
      username = "" + username
    }else{
      username = null;
    }
    var user_type;
    if(i.location.search.match(/crema-test=/) || ["nuvodi","littleblack23","crematest","17646","cremababy","wisatest","crema2","makespjjang","cremamof","hicrema","cremachma","honey7922","honey8922","honey5922","qkskskvorxhfl01","qkskskvorxhfl02","qkskskvorxhfl03","rlaaltmf3699","rlaaltmf12345678","qkskskvorxhfl04","qkskskvorxhfl05","qkskskvorxhfl06","qkskskvorxhfl07","mtest1","mtest2","mtest3","mtest4","mtest5","crematest1"].indexOf(username) !== -1){
        i[g] = undefined;
        try{delete i[g];}catch(e){}
        a = s.getElementById("crema-jssdk");
        a.parentNode.removeChild(a);
        a = s.createElement(o);
        a.src = 'http://twidgets.cre.ma/snipershop.co.kr/init.js';
        a.async = 1;
        a.id = "crema-jssdk";
        m = s.getElementsByTagName(o)[0];
        m.parentNode.insertBefore(a,m);
        return;
    }else if(i.location.search.match(/crema-local=/) || ["cremadev"].indexOf(username) !== -1){
        i[g] = undefined;
        try{delete i[g];}catch(e){}
        a = s.getElementById("crema-jssdk");
        a.parentNode.removeChild(a);
        a = s.createElement(o);
        a.src = 'http://lwidgets.cre.ma/snipershop.co.kr/init.js';
        a.async = 1;
        a.id = "crema-jssdk";
        m = s.getElementsByTagName(o)[0];
        m.parentNode.insertBefore(a,m);
        return;
    }else if(["chichs","dj99","handae","mirakong729","gtosec","kyslong","gywls337","naktasha24","mirakong","yhtest","lgs901","thecrema","thecrema1","thecrema2","thecrema3","thecrema4","mc301","1","2","sadmin","kal0304kr","hyunmi246","kimting33","tfed1214","mutnam","gtosec1","nh@1c868","fa@21caf9a"].indexOf(username) !== -1){
      user_type = "manager";
    }else{
      user_type = "user";
    }



    i[g].info = {
      solution: "cafe24",
      mid: "snipershop.co.kr",
      username: username,
      user_type: user_type,
      base_url: "http://widgets4.cre.ma",
      ad_base_url: "http://ad.cre.ma/snipershop.co.kr",
      fullscreen_popup: false,
      review_max_popup_count_per_day: 3,
      use_legacy_review_for_powerapps: true,
      file_attach_not_supported_powerapps_android_versions: ["4.4"],
      disable_replace_state_in_mobile_app: false,
      show_review_widget: true
    };
    if(user_name){i[g].info.user_name = user_name;}

    m = s.getElementsByTagName(o)[0];
    r = s.createElement(o);
    r.async = 1;
    r.src = "http://assets4.cre.ma/latte/assets/widgets/pc-55121560d48b10cfa0fbc15fd76acb5c.js";
    r.id = "crema-jssdk";
    r.charset = "UTF-8";
    m.parentNode.insertBefore(r,m);

    r = document.createElement('link');
r.href = "http://assets4.cre.ma/latte/assets/widgets/pc-d4860681c61df9e2a952222f4300b720.css";
r.rel = 'stylesheet';
r.type = 'text/css';
m.parentNode.insertBefore(r,m);

  }
      r = s.getElementById("crema-login-username");
if(r){
  r = r.children[0];
  var username = r.innerText || r.textContent; 
  if(username){
    i[g].init(username);
  }else{
    var get_methods = function() {
      return window.methods || window.CAPP_ASYNC_METHODS; 
    }

    methods = get_methods();

    if(methods && methods.IS_LOGIN == false){ 
      i[g].init();
    }else{
      var n = 0;
      var interval = setInterval(function(){
        r = s.getElementById("crema-login-username").children[0];
        username = r.innerText || r.textContent;
        if(username || ++n >= 25){
            i[g].init(username);
            clearInterval(interval);
        }
      }, 200);
    }
  }
}else{
  i[g].init();
}


})(window,document,"script", "crema");

