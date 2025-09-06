//import PlayerRating from './PlayerRating/PlayerRating';
////import "./themeTwoStyle.scss";

export default function ThemeTwo({ attributes }) {
    const { audioData = {} } = attributes;

    return (
        <div className="audio-player-main audioPlayerTwo">
            <div className="audio-player">
                {/* Left: Cover */}
                <div className="audio-player-left">
                    <div className="audio-cover">
                        <img
                            src={audioData.cover}
                            alt={audioData.title}
                            className="cover-img"
                        />
                    </div>
                </div>

                {/* Right: Info + Controls */}
                <div className="audio-player-right">
                    {/* Title & Artist */}
                    <div className="audio-header">
                        <div>
                            <h3 className="audio-title">{audioData.title}</h3>
                            <p className="audio-artist">{audioData.artist}</p>
                        </div>
                        <span className="audio-time">00:00</span>
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
                        <div className="audio-btns">
                            {/* Prev Button (custom SVG from attributes) */}
                            <button
                                className="control-btn"
                                dangerouslySetInnerHTML={{ __html: audioData.prevIcon }}
                            />

                            {/* Play Button (toggle করার জন্য default open icon) */}
                            <button
                                className="play-btn"
                                dangerouslySetInnerHTML={{ __html: audioData.audioOffIcon }}
                            />

                            {/* Next Button */}
                            <button
                                className="control-btn"
                                dangerouslySetInnerHTML={{ __html: audioData.nextIcon }}
                            />
                        </div>

                        {/* Volume Icon */}
                        <div
                            className="audio-volume"
                        // dangerouslySetInnerHTML={{ __html: audioData.audioOffIcon }}
                        >
                            🔊
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
