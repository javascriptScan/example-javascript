
function vulnerable() {
  console.log('do something dubious1112222');
  return 1;
}

function utility() {
  return vulnerable();
}

module.exports = {
  utility
};
