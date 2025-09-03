import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
// import ThemeOne from '../../theme/themeOne';
// import ThemeTwo from '../../theme/themeTwo';
// import ThemeThree from '../../theme/ThemeThree';

import AudioPlayer from '../../theme/themeSwitch/ThemeSwitch';
//import ShowPurpose from "../Common/ShowPurpose";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />


        <AudioPlayer {...{ attributes, setAttributes }} />
        {/* <ShowPurpose attributes={attributes} />
        <ThemeOne {...{ attributes, setAttributes }} />
        <ThemeTwo  {...{ attributes, setAttributes }} />
        <ThemeThree  {...{ attributes, setAttributes }} /> */}
      </div>
    </>
  );
};
export default Edit;
