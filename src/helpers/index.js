export const isTouchDevice = ('ontouchstart' in window);

export const projectNameMaxLength = 68;

export const maxId = 100;

let dev_console = getCookie("dev_console");
if(dev_console) { // overwrite cookie and set to expire in 24 hrs
  document.cookie = "dev_console=true; max-age=60*60*24;"
}
export function logMsg(...msgs) { 
  if(document.location.hostname === "localhost") {
    console.log("[DEV CONSOLE MSG]:", ...msgs);
  }
  else { // hide all console msgs behind a cookie in prod
    if(dev_console) {
      console.log("[DEV CONSOLE MSG]:", ...msgs);
    }
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function placeCaretAtEnd(el) {
  el.focus();
  if (typeof window.getSelection !== "undefined" && typeof document.createRange !== "undefined") {
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  } else if (typeof document.body.createTextRange !== "undefined") {
    var textRange = document.body.createTextRange();
    textRange.moveToElementText(el);
    textRange.collapse(false);
    textRange.select();
  }
}