import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import AudioPlayer from '../../theme/themeSwitch/ThemeSwitch';
import { usePremiumInEditor } from '../../../../bpl-tools/hooks';

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  const { isPremium } = usePremiumInEditor("rasclUtils", "rasclPremiumChecker");

  console.log('Edit ', isPremium)

  return (
    <>
      <Settings {...{ attributes, setAttributes, isPremium }} clientId={clientId} />

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
