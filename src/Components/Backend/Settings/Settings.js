
import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { tabController } from '../../../../../bpl-tools/utils/functions';
import { blocks, generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';
import { BplBlockPreview } from '../../../../../bpl-tools/Components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { AboutProModal } from "../../../../../bpl-tools/ProControls";
import { useState } from 'react';


const Settings = ({ attributes, setAttributes, clientId, isPremium, siteUrl }) => {
	const { alignment, theme } = attributes;

	const [isProModalOpen, setIsProModalOpen] = useState(false);
	const siteLocation = `${siteUrl}/wp-admin/edit.php?post_type=book&page=audio_player_Dashboard#/pricing`;

	return <>
		<InspectorControls>
			<TabPanel className='bPlTabPanel wp-block-b-blocks-test-purpose' activeClass='activeTab' tabs={generalStyleTabs} onSelect={tabController}>
				{
					tab => <>
						{'general' === tab.name && <General attributes={attributes} isPremium={isPremium} setAttributes={setAttributes} />}

						{'style' === tab.name && <Style attributes={attributes} isPremium={isPremium} setAttributes={setAttributes} setIsProModalOpen={setIsProModalOpen} />}
					</>
				}
			</TabPanel>
		</InspectorControls>


		<BlockControls>

			<AlignmentToolbar value={alignment} onChange={val => setAttributes({ alignment: val })} describedBy={__('Block Name Alignment')} alignmentControls={[
				{ title: __('Block Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
				{ title: __('Block Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
				{ title: __('Block Name in right', 'textdomain'), align: 'right', icon: 'align-right' }
			]} />
			<BplBlockPreview
				blocks={blocks}
				clientId={clientId}
				value={theme}
				minWidth="450px"
			/>

		</BlockControls>
		<AboutProModal
			isProModalOpen={isProModalOpen}
			setIsProModalOpen={setIsProModalOpen}
			link={siteLocation}
		>
			<li>
				<strong>
					{__("Layout Flexible design: ", "services-card")}
				</strong>
				{__("Service Card Icon text description Design ", "services-card")}
			</li>
		</AboutProModal>
	</>;
};

export default compose(
	withSelect((select) => {
		return {
			siteUrl: select('core').getSite()?.url,
		};
	})
)(Settings);