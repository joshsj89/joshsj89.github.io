function SpotifyEmbedder({ size, sizePercentage, type, uri }) {
    return (
        <iframe 
            style={{ borderRadius: 12 }}
            src={`https://open.spotify.com/embed/${type}/${uri}?utm_source=generator`} 
            width={`${sizePercentage}%`}
            height={size === 'Compact' ? '152' : '352'}
            frameBorder="0" 
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            >
        </iframe>
    )
}

export default SpotifyEmbedder;