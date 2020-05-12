class GitHub {
    constructor() {
        this.client_id = '5f323f85118c1b89e017';
        this.client_secret = '8e3b800f48a9ab23a11d25516d4d81ca3b1ba8cb';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        const repos = await reposResponse.json();

        return {
            profile: profile,
            repos: repos
        }
    }
}

