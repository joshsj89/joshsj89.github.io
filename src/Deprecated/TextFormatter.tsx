function TextFormatter({ description }: { description: string }) {
    const format = (): (string | JSX.Element)[] => {
        const words = description.split(' ');

        return words.map((word) => {
            if (word.includes('boldword')) {
                return <strong>{word}</strong>;
            } else if (word.includes('anchorword')) {
                return <a href="https://example.com">{word}</a>;
            } else {
                return word;
            }
        })
    }
}