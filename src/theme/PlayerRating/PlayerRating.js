import { useState } from "react";
import "./PlayerRatingStyle.css";

const PlayerRating = ({ index, icon, audioFileName }) => {
    const [rating, setRating] = useState(0);

    const handleRate = (star) => {
        setRating(star);
    };

    return (
        <div className="player-rating">
            <div className="player-header">
                <h3 className="player-title">{audioFileName || `Player ${index + 1}`}</h3>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRate(star);
                            }}
                            className={`star-btn ${rating >= star ? "active" : ""}`}
                            dangerouslySetInnerHTML={{
                                __html: icon // svg string render
                            }}
                        />
                    ))}
                </div>
            </div>

            {rating > 0 && (
                <div className="rating-text">Rated {rating}/5</div>
            )}
        </div>
    );
};

export default PlayerRating;
