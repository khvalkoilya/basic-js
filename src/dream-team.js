module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  members=members.filter(item=>typeof item == 'string');
  members=members.map(item=>item.replace(/^(\s+)/,''));
  return members.map(item=>item.toUpperCase()).sort().map(item=>item=item[0]).join("");
};
