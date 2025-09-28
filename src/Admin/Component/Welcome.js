import Overview from "../../../../bpl-tools/Admin/Overview/Overview";
import Changelog from "../../../../bpl-tools/Admin/Changelog/Changelog";
//import FSCheckoutButton from "../../../../bpl-tools/Admin/FSCheckoutButton/FSCheckoutButton";

import { changelogs } from "../Utils/data";

const Welcome = (props) => {
    const { isPremium, } = props;

    return (
        <>
            <Overview {...props}>
                {!isPremium && <button
                    type='button'
                    className='bPlButton variant-secondary'
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = '#/pricing';
                    }}
                >Buy Now</button>}
            </Overview>

            <Changelog changelogs={changelogs} {...props} />
        </>
    );
};

export default Welcome;
