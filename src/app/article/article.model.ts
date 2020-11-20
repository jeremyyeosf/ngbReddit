export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
    voteUp() {
        this.votes += 1;
        // returning false tells browser not to follow empty link/reload, 
        // as click event is propagated to all parent components in JS
        return false; 
      }
    
      voteDown() {
        this.votes -= 1;
        return false;
      }

      domain(): string {
        try {
          // e.g. http://foo.com/path/to/bar
          const domainAndPath: string = this.link.split('//')[1];
          // e.g. foo.com/path/to/bar
          return domainAndPath.split('/')[0];
        } catch (err) {
          return null
        }
      }

}