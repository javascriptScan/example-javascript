
function vulnerable() {
  console.log('do something dubious11122223333');
  return 1;
}

function utility() {
  return vulnerable();
}

module.exports = {
  utility
};
