interface InfoText {
    [name: string]: {
        title: string | string[];
        text: string
    };
}

export const infoTexts: InfoText = {
    "Programming": {
        "title": ["Software Engineer", "Full-Stack Developer"],
        "text": "Hey, I'm Josh! I am an aspiring software engineer and full-stack developer who loves solving problems and learning new languages, frameworks, and technologies. I am currently a graduate student at Santa Clara University pursuing an M.S. in Computer Science and Engineering with an emphasis in Software Systems and Security. Previously, I graduated from Santa Clara University with a B.S. in Computer Science and Engineering and a minor in Mathematics."
    },
    "Photography": {
        "title": "Photography",
        "text": "I love photography and own a Canon EOS Rebel T3i. I enjoy taking pictures of nature and also of people. I have a photography Instagram account where I post my favorite pictures that I take."
    },
    "Jazz": {
        "title": "Jazz",
        "text": "I love jazz! I play piano and have been learning jazz piano, focusing on learning music theory. I really like stride piano. I also have been playing alto saxophone since 5th grade. I am currently in SCU's Pep Band, performing at sports games and other campus events. Check out my jazz Spotify playlists!"
    },
    "Football": {
        "title": "Football⚽",
        "text": "I love football, and I mean real football! I am a huge fan of Chelsea and FC Barcelona. I played club soccer for 8 years and now just play intramural for fun. I've made many connections in both the men's and women's game and, in the future, I hope to use my skills to help grow the game in the United States."}
};