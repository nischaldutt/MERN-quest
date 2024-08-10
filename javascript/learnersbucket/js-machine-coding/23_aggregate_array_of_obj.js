function aggregate(arr, on, who) {
  const result = arr.reduce((acc, curr) => {
    const onValue = curr[on];
    const whoValue = curr[who];

    if (acc[onValue] === undefined) {
      acc[onValue] = {
        [on]: onValue,
        [who]: [whoValue],
      };
    } else {
      acc[onValue] = {
        [on]: onValue,
        [who]: [...acc[onValue][who], whoValue],
      };
    }
    return acc;
  }, {});
  return Object.values(result);
}

const endorsements = [
  { skill: "css", user: "Bill" },
  { skill: "javascript", user: "Chad" },
  { skill: "javascript", user: "Bill" },
  { skill: "css", user: "Sue" },
  { skill: "javascript", user: "Sue" },
  { skill: "html", user: "Sue" },
];

console.log(aggregate(endorsements, "user", "skill"));
console.log(aggregate(endorsements, "skill", "user"));
