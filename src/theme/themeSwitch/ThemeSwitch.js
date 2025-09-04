import ThemeOne from '../ThemeOne';
import ThemeTwo from '../ThemeTwo';
import ThemeThree from '../ThemeThree';


const AudioPlayer = ({ attributes, setAttributes }) => {
    const { theme = 'themeOne' } = attributes;

    return <ThemeSwitch theme={theme} {...{ attributes, setAttributes }} />;
}

export default AudioPlayer;


const ThemeSwitch = ({ theme, attributes, setAttributes }) => {
    switch (theme) {
        case 'themeTwo':
            return <ThemeTwo {...{ attributes, setAttributes }} />
        case 'themeThree':
            return <ThemeThree {...{ attributes, setAttributes }} />;

        default:
            return <ThemeOne {...{ attributes, setAttributes }} />;

    }
}