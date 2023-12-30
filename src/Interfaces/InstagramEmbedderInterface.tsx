export default interface InstagramEmbedderInterface {
    account: string;
    height: number;
}

/** Global Window Interface */
declare global {
    interface Window {
        /** Instagram Embedder */
        instgrm: {
            Embeds: {
                /** @function Manually initialize the HTML Instagram embeds */
                process: () => void;
            };
        }
    }
}