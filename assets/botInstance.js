const Bot = function(...args) {
  User.apply(this, args);
  this.surname = 'Bot',
  this.separator = '-'
};
