class GitHub {
    constructor() {
        this.client_id = '3e3764986ad8476e831b';
        this.client_secret = 'ad93526f939b1437e13e7b7bf75dcc24fc810303';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'; 
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile: profile,
            repos: repos
        }
    }
}