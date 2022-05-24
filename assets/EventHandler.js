const EventHandler = (function(element, event, callback, options) {
  if(addEventListener) {
    return function(element, event, callback, options) {
      element.addEventListener(event, function(e) {
        callback.call(this, e || window.event);
      }, options);
    };
  } else if(attachEvent) {
    return function(element, event, callback) {
      event = 'on' + event;
      element.attachEvent(event, function(e) {
        callback.call(this, e || window.event);
      });
    };
  } else {
    return function(element, event, callback) {
      event = 'on' + event;
      element[event] = function(e) {
        callback.call(this, e || window.event);
      };
    };
  }
})();
