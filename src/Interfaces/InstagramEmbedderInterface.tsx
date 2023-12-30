export default interface InstagramEmbedderInterface {
    account: string;
    height: number;
}

declare global {
    interface Window {
        instgrm: {
            Embeds: {
                process: () => void;
            };
        }
    }
}