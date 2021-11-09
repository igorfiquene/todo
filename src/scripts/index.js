import '../styles/index.scss';
import todo from "./functions/todo";

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

document.addEventListener("DOMContentLoaded", () => {
  todo();
});