import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import AudioPlayer from '../../theme/themeSwitch/ThemeSwitch';

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />


        <div className='audioPlayerWrapper'>
          <AudioPlayer {...{ attributes, setAttributes }} />
        </div>
      </div>
    </>
  );
};
export default Edit;
