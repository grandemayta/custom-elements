import { getCompetitionTeams } from './http-wrapper.js';

class footballTeams extends HTMLElement {
    get competition() { return this.getAttribute('competition'); }
    
    async connectedCallback() {
        const { teams } = await getCompetitionTeams(this.competition);
        this.innerHTML = this.render(teams);
    }

    // Custom function to render a list
    render(teams= []) {
        return teams.reduce((acc, team) => `
            ${acc}
            <div>
                <h4>${team.name}</h4>
                <img src="${team.crestUrl}" style="width: 60px">
            </div>
        `,'');
    }
}
customElements.define('football-teams', footballTeams);