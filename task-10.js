import users from './users.js';
const getSortedUniqueSkills = users =>
  users.reduce((skills, user) => {
    if (skills.includes(...user.skills)) {
      return skills;
    }
    skills.push(...user.skills);
    return skills;
  }, []);
console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
