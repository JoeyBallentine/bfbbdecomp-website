export default [
  {
    link: "what-is-this",
    question: "What is this?",
    answer: `
        BFBB Decomp is a reverse engineering project where we are attempting to
		make a 1:1 recreation of the game's original source code. This will 
		allow us to better understand the game and make the game's code easier 
		to modify.
        `,
  },
  {
    link: "are-u-done",
    question: "When will this be done?",
    answer: `
        Check the <a href="progress">progress page</a>
        to see a detailed breakdown of the project's status.
		Decomp projects tend to take an extremely long time.
        `,
  },
  {
    link: "pc-port",
    question: "When will there be a PC port?",
    answer: `
		Some time after we get 100% of the game decompiled.
        `,
  },
  {
    link: "how-to-contribute",
    question: "How can I contribute?",
    answer: `
		Join the <a href="https://discord.gg/Dvu2UAS">BFBB modding discord</a>.
        All discussion takes place in #decomp-discussion.
        
        <p>
        If you have web development skills, you can help improve this website
        by working on
        <a href="https://github.com/bfbbdecomp/bfbbdecomp-website/issues">
        one of the many issues</a>.
        </p>
        `,
  },
  {
    link: "useful-for-modding",
    question: "Is this useful for creating mods?",
    answer: `
            Yes, but there are some major caveats that limit its usefulness right now.
            The biggest caveat is that the game's code cannot be "shifted" around.
            New code can be added and existing code can be replaced as long as it isn't
            shifted around.
        `,
  },
  {
    link: "make-a-mod",
    question: "Will you make X mod with this?",
    answer: `No.`,
  },
  {
    link: "website-info",
    question: "About this website",
    answer: `
        Made with <a target="_blank" href="https://vuejs.org/">Vue.js</a>.
        Each commit is processed by
        <a target="_blank" href="https://www.python.org/">Python</a>
        using 
        <a target="_blank" href="https://gitpython.readthedocs.io/">GitPython</a>
        and the resulting data is rendered using
        <a target="_blank" href="https://www.highcharts.com/">Highcharts</a>.
        The website is automatically built and deployed to 
        <a target="_blank" href="https://pages.github.com/">GitHub Pages</a>
        after every commit.
        <a target="_blank" href="https://github.com/bfbbdecomp/bfbbdecomp-website">View this website's source code</a>.
        <br>
        Progress tracking inspired by <a target="_blank" href="https://zelda64.dev/progress.html">Zelda 64 Reverse Engineering</a>.
        `,
  },
];
