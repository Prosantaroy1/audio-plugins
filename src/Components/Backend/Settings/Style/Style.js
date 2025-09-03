import { __ } from '@wordpress/i18n';
import { PanelBody, __experimentalUnitControl as UnitControl } from '@wordpress/components';
import { Background, BoxControl, ColorControl, Typography } from "../../../../../../bpl-tools/Components";
import { updateData } from '../../../../../../bpl-tools/utils/functions';


const Style = ({ attributes, setAttributes }) => {
  const { Styles = {} } = attributes;

  const { audioContainerDiv, headingtitle, actorNames, audioTime, progressStyle, controlBtn, playerStyle } = Styles;

  //const { Bar, Fill } = progressStyle;

  console.log('div bg', audioContainerDiv?.bg)

  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Audio main div', 'b-blocks')} initialOpen={false}>
        <Background
          label="Audio div bg"
          value={audioContainerDiv?.bg}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'audioContainerDiv', 'bg')
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Audio Header Style', 'b-blocks')} initialOpen={false}>
        {/*------ title header style---- */}
        <Typography
          label='Title Typography'
          value={headingtitle?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'headingtitle', 'typo')
          })}
        />
        <ColorControl
          label='Title Color'
          value={headingtitle?.colors}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'headingtitle', 'colors')
          })}
        />
        <BoxControl
          label="Title Margin"
          values={headingtitle?.margin}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'headingtitle', 'margin')
          })}
        />
        {/*------- actorNames style------ */}
        <Typography
          label='Actor-Name Typography'
          value={actorNames?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'actorNames', 'typo')
          })}
        />
        <ColorControl
          label='Actor-Name Color'
          value={actorNames?.colors}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'actorNames', 'colors')
          })}
        />
        <BoxControl
          label="Actor-Name Margin"
          values={actorNames?.margin}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'actorNames', 'margin')
          })}
        />
        {/* -------audio time---- */}
        <Typography
          label='Audio-Time Typography'
          value={audioTime?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'audioTime', 'typo')
          })}
        />
        <ColorControl
          label='Audio Color'
          value={audioTime?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'audioTime', 'color')
          })}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Progress Style', 'b-blocks')} initialOpen={false}>
        <ColorControl
          label='progressStyle Bar Color'
          value={progressStyle?.Bar?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'progressStyle', 'Bar', 'color')
          })}
        />
        <ColorControl
          label='progressStyle Fill Color'
          value={progressStyle?.Fill?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'progressStyle', 'Fill', 'color')
          })}
        />

      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('control-btn Style', 'b-blocks')} initialOpen={false}>
        <ColorControl
          label='control-btn Color'
          value={controlBtn?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'controlBtn', 'color')
          })}
        />
        <UnitControl
          label='control-btn width'
          value={controlBtn?.width}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'controlBtn', 'width')
          })}
        />
        <UnitControl
          label='control-btn height'
          value={controlBtn?.height}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'controlBtn', 'height')
          })}
        />

      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('player-Rating Style', 'b-blocks')} initialOpen={false}>
        {/* player Name style */}
        <ColorControl
          label='Player Name Color'
          value={playerStyle?.playerTitle?.color}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'playerStyle', 'playerTitle', 'color')
          })}
        />
        <Typography
          label='Player Name Typography'
          value={playerStyle?.playerTitle?.typo}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'playerStyle', 'playerTitle', 'typo')
          })}
        />
        {/* rating icon width height */}
        <UnitControl
          label='rating width'
          value={playerStyle?.ratingIcon?.width}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'playerStyle', 'ratingIcon', 'width')
          })}
        />
        <UnitControl
          label='rating height'
          value={playerStyle?.ratingIcon?.height}
          onChange={(v) => setAttributes({
            Styles: updateData(Styles, v, 'playerStyle', 'ratingIcon', 'height')
          })}
        />
      </PanelBody>
    </>
  )
}

export default Style; 