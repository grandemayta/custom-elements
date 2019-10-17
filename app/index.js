import { getCompetitionTeams } from './http-wrapper.js';

class footballTeams extends HTMLElement {
    // Get attribute name value
    get competition() { return this.getAttribute('competition'); }
    
    // Invoked each time the custom element is appended into the DOM
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