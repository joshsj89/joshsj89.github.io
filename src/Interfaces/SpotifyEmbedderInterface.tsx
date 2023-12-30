/**
 * @description SpotifyEmbedderInterface interface for the SpotifyEmbedder component
 * @see https://developer.spotify.com/documentation/widgets/generate/embed/
 */
export default interface SpotifyEmbedderInterface {
    /** The size of the embedder: "Normal" or "Compact" */
    size: "Normal" | "Compact";
    /** The size of the embedder in percentage */
    sizePercentage: number;
    /** The type of the embedder: "Album", "Artist", "Playlist", or "Track" */
    type: string;
    /** The uri of the embedder */
    uri: string;
}