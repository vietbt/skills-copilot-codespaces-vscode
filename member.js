function skillsMember()
{
  return {
    name: "Member",
    description: "A member of the team.",
    skills: [
      {
        name: "JavaScript",
        level: "Intermediate"
      },
      {
        name: "Python",
        level: "Beginner"
      }
    ]
  };
}

function skillsMember2()
{
  return {
    name: "Member2",
    description: "Another member of the team.",
    skills: [
      {
        name: "Java",
        level: "Expert"
      },
      {
        name: "C++",
        level: "Intermediate"
      }
    ]
  };
}

// Exporting the functions
module.exports = {
  skillsMember,
  skillsMember2
};