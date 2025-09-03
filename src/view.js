import { createRoot } from 'react-dom/client';
import './style.scss';
import Style from './Components/Common/Style';
import ThemeOne from './theme/themeOne';
//import ShowPurpose from './Components/Common/ShowPurpose';

document.addEventListener('DOMContentLoaded', () => {
	const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-audio-html-player');
	blockNameEls.forEach(blockNameEl => {
		const attributes = JSON.parse(blockNameEl.dataset.attributes);

		createRoot(blockNameEl).render(<>
			<Style attributes={attributes} id={blockNameEl.id} />

			{/* <ShowPurpose attributes={attributes} /> */}
			<ThemeOne />

		</>);

		blockNameEl?.removeAttribute('data-attributes');
	});
});