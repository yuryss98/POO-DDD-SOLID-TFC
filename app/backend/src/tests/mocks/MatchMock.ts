const matchesInTime = [
  {
    id: 1,
    homeTeamId: 6,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'Ferroviária'
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann'
    }
  },
  {
    id: 2,
    homeTeamId: 11,
    homeTeamGoals: 0,
    awayTeamId: 10,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'Napoli-SC'
    },
    awayTeam: {
      teamName: 'Minas Brasília'
    }
  },
];

const finishedMatches = [
  {
    id: 1,
    homeTeamId: 1,
    homeTeamGoals: 5,
    awayTeamId: 2,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Avaí/Kindermann'
    },
    awayTeam: {
      teamName: 'Bahia'
    }
  },
  {
    id: 2,
    homeTeamId: 3,
    homeTeamGoals: 1,
    awayTeamId: 5,
    awayTeamGoals: 4,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo'
    },
    awayTeam: {
      teamName: 'Cruzeiro'
    }
  },

  {
    id: 4,
    homeTeamId: 7,
    homeTeamGoals: 3,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Grêmio'
    },
    awayTeam: {
      teamName: 'Internacional'
    }
  },

  {
    id: 5,
    homeTeamId: 8,
    homeTeamGoals: 3,
    awayTeamId: 3,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional'
    },
    awayTeam: {
      teamName: 'Botafogo'
    }
  },

  {
    id: 6,
    homeTeamId: 5,
    homeTeamGoals: 3,
    awayTeamId: 7,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Cruzeiro'
    },
    awayTeam: {
      teamName: 'Grêmio'
    }
  },

  {
    id: 7,
    homeTeamId: 2,
    homeTeamGoals: 3,
    awayTeamId: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Bahia'
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann'
    }
  },
]

const createMatch = {
  id: 5,
  homeTeamId: 1,
  awayTeamId: 2,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
  inProgress: true
}

const newMatchValid = {
  homeTeamId: 1,
  awayTeamId: 2,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
}

export { matchesInTime, finishedMatches, newMatchValid, createMatch };