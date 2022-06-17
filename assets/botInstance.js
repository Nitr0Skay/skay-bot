import { User } from './userInstance.js';
import init from './initBotProtos.js';
export const Bot = function(...args) {
  User.apply(this, args);
  this.surname = 'Bot',
  this.separator = '-'
};
