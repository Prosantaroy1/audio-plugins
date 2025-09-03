import ThemeOne from '../themeOne';
import ThemeThree from '../ThemeThree';
import ThemeTwo from '../themeTwo';

const AudioPlayer = ({ attributes, setAttributes }) => {
    const { theme } = attributes;

    const obj = {
        'themeOne': ThemeOne,
        'themeTwo': ThemeTwo,
        'themeThree': ThemeThree
    }

    const SelectTheme = obj[theme] || ThemeOne;

    // let content;
    // switch (theme) {

    //     case "themeTwo":
    //         content = <ThemeTwo attributes={attributes} setAttributes={setAttributes} />;
    //         break;

    //     case "themeThree":
    //         content = <ThemeThree attributes={attributes} setAttributes={setAttributes} />;
    //         break;

    //     default:
    //         content = <ThemeOne attributes={attributes} setAttributes={setAttributes} />;
    //         break;
    // }

    return <SelectTheme {...{ attributes, setAttributes }} />;
}

export default AudioPlayer;
