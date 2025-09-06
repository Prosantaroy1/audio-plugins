import { useRef, useState } from "react";


const ThemeOne = ({
    currentTime,
    isPlaying,
    attributes,
}) => {
    const { audioData = {} } = attributes;

    const {
        title = "It All Began With a Burst",
        artist = "Proshanto Roy",
        duration: audioDuration = 0,
        prevIcon = "",
        nextIcon = "",
        audioOffIcon = "▶",
        audioOpenIcon = "⏸",
        audioFile = ""
    } = audioData;

    const audioRef = useRef(null);
    const [playerTime, setPlayerTime] = useState(currentTime || 0);
    const [playerPlaying, setPlayerPlaying] = useState(isPlaying || false);

    const formatTime = (time) => {
        if (!time || isNaN(time)) return "0:00";

        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.floor(time % 60)
            .toString()
            .padStart(2, "0");

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds}`;
        } else {
            return `${minutes}:${seconds}`;
        }
    };


    const handleTogglePlay = () => {
        if (!audioRef.current) return;

        if (playerPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlayerPlaying(!playerPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) setPlayerTime(audioRef.current.currentTime);
    };


    // const handleRate = (index, star) => {
    //     console.log(star)
    // };

    return (
        <div className="audio-player-main audioPlayerOne">
            <div className="audio-player" >
                {/* Header */}
                <div className="audio-header">
                    <div>
                        <h3 className="audio-title">{title}</h3>
                        <p className="audio-artist">{artist}</p>
                    </div>
                    <span className="audio-time">
                        {formatTime(playerTime)} / {formatTime(audioDuration)}
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="progress-container">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${(120 / 200) * 100}%` }}
                        ></div>
                    </div>
                </div>

                {/* Controls */}
                <div className="audio-controls">
                    <button
                        className="control-btn"
                        dangerouslySetInnerHTML={{ __html: prevIcon }}
                    />
                    <button
                        className="play-btn"
                        onClick={handleTogglePlay}
                        dangerouslySetInnerHTML={{
                            __html: playerPlaying ? audioOpenIcon : audioOffIcon
                        }}
                    />

                    <button
                        className="control-btn"
                        dangerouslySetInnerHTML={{ __html: nextIcon }}
                    />
                    <div className="volume-container">
                        🔊
                        <div className="volume-bar">
                            <div className="volume-fill"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden audio element */}
            <audio
                ref={audioRef}
                src={audioFile}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setPlayerPlaying(false)}
            />
        </div>
    );
};

export default ThemeOne;
