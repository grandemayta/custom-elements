const http = async endpoint => {
    const url = 'https://api.football-data.org';
    const version = 'v2';
    const headers = { 'X-Auth-Token': 'ffd61d87e73740c29dd389ea7619d5e1' };
    return await (await fetch(`${url}/${version}/${endpoint}`, { headers })).json();
};

export const getCompetitionTeams = (competition) => {
    return http(`competitions/${competition}/teams`);
}