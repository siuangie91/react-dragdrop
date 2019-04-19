export const isTouchDevice = ('ontouchstart' in window);

export const projectNameMaxLength = 68;

const maxId = 100;
export const getRandomInteger = () => Math.floor((Math.random() * maxId) + 1);

let dev_console = getCookie("dev_console");
if (dev_console) { // overwrite cookie and set to expire in 24 hrs
  document.cookie = "dev_console=true; max-age=60*60*24;"
}
export function logMsg(...msgs) {
  if (document.location.hostname === "localhost") {
    console.log("[DEV CONSOLE MSG]:", ...msgs);
  }
  else { // hide all console msgs behind a cookie in prod
    if (dev_console) {
      console.log("[DEV CONSOLE MSG]:", ...msgs);
    }
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
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

export function isEqual(value, other) {
  const TYPES = {
    array: '[object Array]',
    object: '[object Object]'
  };

  // get the value type
  const type = Object.prototype.toString.call(value);

  // if they are primitives, don't bother
  if ([TYPES.array, TYPES.object].indexOf(type) < 0) {
    return false
  };
  // not equal if they are different types
  if(type !== Object.prototype.toString.call(other)) {
    return false;
  }
  // compare item size
  const valueLen = (type === TYPES.array) ? value.length : Object.keys(value).length;
  const otherLen = (type === TYPES.array) ? other.length : Object.keys(other).length;
  if(valueLen !== otherLen) {
    return false;
  }

  // comparator
  // Compare two items
  const compare = function (item1, item2) {
    // Get the object type
    const itemType = Object.prototype.toString.call(item1);
    // If an object or array, compare recursively
    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) {
        return false;
      }
    }
    // Otherwise, do a simple comparison
    else {
      // If the two items are not the same type, return false
      if (itemType !== Object.prototype.toString.call(item2)) {
        return false;
      }
      // If it's a function, convert to a string and compare
      // Otherwise, just compare
      if (itemType === '[object Function]') {
        if (item1.toString() !== item2.toString()) {
          return false;
        }
      } else {
        if (item1 !== item2) {
          return false;
        }
      }
    }
  };

  // compare properties
  if(type === TYPES.array) {
    for (var i = 0; i < valueLen; i++) {
			if (compare(value[i], other[i]) === false) {
        return false;
      }
		}
	} else {
		for (var key in value) {
			if (value.hasOwnProperty(key)) {
				if (compare(value[key], other[key]) === false) {
          return false;
        }
			}
		}
	}

  return true;
}