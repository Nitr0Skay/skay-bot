export const EventHandler = function(element, event, callback, options) {
  if(addEventListener) {
    element.addEventListener(event, function(e) {
      callback.call(this, e || window.event);
    }, options);
  } else if(attachEvent) {
    event = 'on' + event;
    element.attachEvent(event, function(e) {
      callback.call(this, e || window.event);
    });
  } else {
    event = 'on' + event;
    element[event] = function(e) {
      callback.call(this, e || window.event);
    };
  }
};

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
