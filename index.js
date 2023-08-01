
function vulnerable() {
  console.log('do something dubious111');
  return 1;
}

function utility() {
  return vulnerable();
}

module.exports = {
  utility
};
