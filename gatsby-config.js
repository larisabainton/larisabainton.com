module.exports = {
    siteMetadata: {
        title: 'LARISA',
        description: 'Larisa Bainton',
        content: 'Larisa',
        name: 'Larisa Bainton',
        links: [
            { name: 'facebook', url: 'https://www.facebook.com/motherlarisa' },
            { name: 'instagram', url: 'https://www.instagram.com/mother_larisa/' },
            { name: 'linkedIn', url: 'https://www.linkedin.com/in/larisabainton/' },
        ],
        sections: [
            { name: 'intro', title: 'Hi', text: 'I\'m Larisa. Scroll down to learn more about me' },
            {
                name: 'gallery', headerTitle: 'Videos', title: 'Videos', videos: '<iframe title="Videos" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLWI_rNoeUtePh_Ul-icIPUCu6z67UUd3v" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />',
            },
            {
                name: 'contact', headerTitle: 'Contact', title: 'Say Hello', text: "Let's talk about music, software, or anything really.",
            },
        ],
        descriptions: [
            {
                headerTitle: 'Musician',
                title: 'I\'m a singer',
                text: "I'm a classical singer who enjoys experimenting with other styles. You'll find me performing in operas, jazz ensembles, and contemporary improvisation ensembles around Boston.",
            },
            {
                headerTitle: 'Developer',
                title: 'I\'m a software engineer',
                text: 'JavaScript is my specialty. Check out some of my work here soon.',
            },
        ],
    },
    plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass', 'gatsby-plugin-eslint'],
};
