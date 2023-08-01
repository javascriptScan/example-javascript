
function vulnerable() {
  console.log('do something dubious1112222333344444');
  return 1;
}

function utility() {
  return vulnerable();
}

module.exports = {
  utility
};
