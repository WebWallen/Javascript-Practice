const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

const makeChart = (games, targetTeam) => {
  // Create scoreboard(ul) where we can place game results (li)
  const ulParent = document.createElement('ul');
  // For each game in the games object passed through...
  for (let game of games) {
    // Create a list item for each game result
    const gameLi = document.createElement('li');
    // Call the getScoreLine helper function, pass in each game, and attach to inner HTML
    gameLi.innerHTML = getScoreLine(game);
    // Add the class styles associated with 'win' or 'loss' based on who won the game
    gameLi.classList.add(whoWon(game, targetTeam) ? 'win' : 'loss');
    // Append each list item to its parent (unordered list)
    ulParent.appendChild(gameLi);
  }
  return ulParent;
}

// Determines whether team is home/visitor and who won
const whoWon = ({ homeTeam, awayTeam }, targetTeam) => {
  // If target team is the home team, assign to target
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  // Return target.isWinner (boolean value)
  return target.isWinner;
}

// Takes data from object and formats it in a user friendly fashion
const getScoreLine = ({ homeTeam, awayTeam }) => {
  // Destructure the above object so we can reuse both home/away
  const { team: hTeam, points: hPoints } = homeTeam;
  // Marking each with h or a to prevent confusion (repeat var)
  const { team: aTeam, points: aPoints } = awayTeam;
  // Use a template literal to assign home and away team 
  const teamNames = `${aTeam} @ ${hTeam}`;
  // Initialize scoreLine gloabaly so it can be used in/out of function scope
  let scoreLine;
  // If away points are greater than home points, bold the away team's score to specify winner
  if (aPoints > hPoints) scoreLine = `<b>${aPoints}</b>-${hPoints}`;
  // If home points are greater than away, do the opposite...
  else scoreLine = `${aPoints}-<b>${hPoints}</b>`;
  // Return the properly formatted team name and score line
  return `${teamNames} ${scoreLine}`;
}

// Refactored to be reusable for different teams/scoreboards
const gsSection = document.querySelector('#gs');
const hrSection = document.querySelector('#hr');
// Make a chart for both teams that have a section in HTML
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');
// Append the chart to the specified section
gsSection.appendChild(gsChart);
hrSection.appendChild(hrChart);