import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import AudioPlayer from './theme/themeSwitch/ThemeSwitch';


document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-audio-html-player');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />


			<div className='audioPlayerWrapper'>
				<AudioPlayer {...{ attributes }} />
			</div>

		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});