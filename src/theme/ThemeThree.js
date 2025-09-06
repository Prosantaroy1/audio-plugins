
export default function ThemeThree({ attributes }) {
    const { audioData = {} } = attributes;



    const generateWaveform = () => {
        return Array(50).fill(0).map(() => Math.random() * 30 + 5);
    };

    const waveform = generateWaveform();

    const formatTime = (time) => {
        if (!time && time !== 0) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = String(Math.floor(time % 60)).padStart(2, "0");
        return `${minutes}:${seconds}`;
    };


    return (
        <div className="audio-player-main audioPlayerThree">
            <div className="audio-player">

                <div className="audio-header">
                    <div>
                        <h3 className="audio-title">{audioData.title}</h3>
                        <p className="audio-artist">{audioData.artist}</p>
                    </div>
                    <div className="audio-time">PLAYING</div>
                </div>

                {/* Waveform */}
                <div className="audio5-waveform">
                    {waveform.map((height, i) => (
                        <div
                            key={i}
                            className="audio5-wave-bar"
                            style={{
                                height: `${height}px`,
                                opacity: i < waveform.length / 3 ? 1 : 0.3,
                                backgroundColor: i < waveform.length / 3 ? "#10B981" : "#6B7280",
                            }}
                        ></div>
                    ))}
                </div>

                {/* Controls */}
                <div className="audio5-controls" >
                    {/* Time */}
                    <div className="audio5-time">{formatTime(65)}</div>

                    {/* Buttons */}
                    <div className="audio-controls">
                        <button
                            className="control-btn"
                            dangerouslySetInnerHTML={{ __html: audioData.prevIcon }}
                        />
                        <button
                            className="play-btn"
                            dangerouslySetInnerHTML={{ __html: audioData.audioOffIcon }}
                        />
                        <button
                            className="control-btn"
                            dangerouslySetInnerHTML={{ __html: audioData.nextIcon }}
                        />
                    </div>

                    {/* Volume */}
                    <div className="audio5-volume">
                        🔊
                    </div>
                </div>
            </div>

        </div>
    );
}
