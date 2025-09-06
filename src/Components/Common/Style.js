import { getBackgroundCSS, getBoxCSS, getTypoCSS } from '../../../../bpl-tools/utils/getCSS';

const Style = ({ attributes, id }) => {
	const { Styles = {} } = attributes;

	const { headingtitle, actorNames, audioTime, progressStyle, controlBtn, playerStyle, audioContainerDiv } = Styles;

	const mainSl = `#${id}`;
	//const blockSl = `${mainSl} .bBlocksTestPurpose`;
	const mainContainerSl = `${mainSl} .audio-player-main`;

	//header
	const audioDivSl = `${mainContainerSl} .audio-player`
	const headermainSl = `${mainContainerSl} .audio-header`;
	const audioTitleSl = `${headermainSl} .audio-title`;
	const audioArtistSl = `${headermainSl} .audio-artist`;
	const audioTimeSl = ` ${headermainSl} .audio-time`;

	//.progress-container
	const progressContainerSl = `${mainContainerSl} .progress-container`;
	const progressBarSl = `${progressContainerSl} .progress-bar`;
	const progressFillSl = `${progressContainerSl} .progress-fill`;
	// .control-btn
	const controlBtnSl = `${mainContainerSl} .control-btn svg`;

	//player
	const playerMainSl = `${mainContainerSl} .player-rating`;
	const playerTitleSl = `${playerMainSl} .player-title`;
	const playerRatingSl = `${mainContainerSl} .star-btn svg`;

	return <style dangerouslySetInnerHTML={{
		__html: `
		
			${getTypoCSS(" ", headingtitle?.typo).googleFontLink}
			${getTypoCSS(" ", actorNames?.typo).googleFontLink}
			${getTypoCSS(" ", audioTime?.typo).googleFontLink}
			${getTypoCSS(" ", playerStyle?.playerTitle?.typo).googleFontLink}

			${getTypoCSS(audioTitleSl, headingtitle?.typo).styles}
			${getTypoCSS(audioArtistSl, actorNames?.typo).styles}
			${getTypoCSS(audioTimeSl, audioTime?.typo).styles}
			${getTypoCSS(playerTitleSl, playerStyle?.playerTitle?.typo).styles}
			
			${audioDivSl}{
			   padding: ${getBoxCSS(audioContainerDiv?.padding)};
			   ${getBackgroundCSS(audioContainerDiv?.bg?.color)}
			}
			

			${audioTitleSl}{
			  color: ${headingtitle?.colors};
			  margin: ${getBoxCSS(headingtitle?.margin)};	  
			}
			${audioArtistSl}{
			  color: ${actorNames?.colors};
			  margin: ${getBoxCSS(actorNames?.margin)};	  
			}
			${audioTimeSl}{
			  color: ${audioTime?.color};
			}
			${progressBarSl}{
			  background: ${progressStyle?.Bar?.color};
			}
			${progressFillSl}{
			  background: ${progressStyle?.Fill?.color};
			}
			${controlBtnSl}{
			  color: ${controlBtn?.color};
			  width: ${controlBtn?.width};
			  height: ${controlBtn?.height};
			}
			${playerTitleSl}{
			  color: ${playerStyle?.playerTitle?.color}
			}
			${playerRatingSl}{
			  width: ${playerStyle?.ratingIcon?.width};
			  height: ${playerStyle?.ratingIcon?.height};
			} 

	`}} />;
}
export default Style;