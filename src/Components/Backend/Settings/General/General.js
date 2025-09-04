import { __ } from "@wordpress/i18n";
import { PanelBody, TextControl, __experimentalNumberControl as NumberControl, SelectControl } from "@wordpress/components";
import { themeOption } from "../../../../utils/options";
import { themeSwitch, updateData } from "../../../../utils/functions";
import { IconLibrary, } from '../../../../../../bpl-tools/Components';

const General = ({ attributes, setAttributes }) => {
  const { audioData, theme } = attributes;

  console.log(theme)



  return (
    <>
      <PanelBody className='bPlPanelBody' title={__('Theme Change', 'b-blocks')} initialOpen={false}>
        <SelectControl
          labelPosition="left"
          value={theme}
          options={themeOption}
          onChange={(value) => setAttributes(themeSwitch(value, attributes))}
        />
      </PanelBody>
      <PanelBody className='bPlPanelBody' title={__('Audio Content Change', 'b-blocks')} initialOpen={false}>
        {/* -----header title------- */}
        <TextControl
          label="heading Title"
          value={audioData?.title}
          onChange={(v) => setAttributes({
            audioData: updateData(audioData, v, 'title')
          })}
        />
        <TextControl
          label="Artist Name"
          value={audioData?.artist}
          onChange={(v) => setAttributes({
            audioData: updateData(audioData, v, 'artist')
          })}
        />
        {/* audio time */}
        <NumberControl
          label='Duration (number - time)'
          value={audioData?.duration}
          onChange={(v) => setAttributes({
            audioData: updateData(audioData, v, 'duration')
          })}
        />
        {/* prev icon change */}
        <IconLibrary
          label='Prev Icon Set'
          value={audioData?.prevIcon}
          onChange={(v) => setAttributes({
            audioData: updateData(audioData, v, 'prevIcon')
          })}
        />
        {/* prev icon change */}
        <IconLibrary
          label='Next Icon Set'
          value={audioData?.nextIcon}
          onChange={(v) => setAttributes({
            audioData: updateData(audioData, v, 'nextIcon')
          })}
        />
        {/* audio file name change */}
        <TextControl
          label="Audio File name"
          value={audioData?.audioFileName}
          onChange={(v) => setAttributes({
            audioData: updateData(audioData, v, 'audioFileName')
          })}
        />
        {/* rating Icon */}
        <IconLibrary
          label='Rating Icon Set'
          value={audioData?.ratingIcon}
          onChange={(v) => setAttributes({
            audioData: updateData(audioData, v, 'ratingIcon')
          })}
        />
      </PanelBody>
    </>
  );
};

export default General;
