import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import ListDemos from "../../../../bpl-tools/Admin/Demos/ListDemos";
import FSCheckoutButton from "../../../../bpl-tools/Admin/FSCheckoutButton/FSCheckoutButton";
import Pricing from "../../../../bpl-tools/Admin/Pricing/Pricing";
import FeatureCompare from "../../../../bpl-tools/Admin/FeatureCompare/FeatureCompare";

import FilterDemos from "../../../../bpl-tools/Admin/Demos/FilterDemos";
import FSCheckoutForm from "../../../../bpl-tools/Admin/FSCheckoutForm/FSCheckoutForm";

import Layout from "./Layout";
import {
    demoInfo,
    pricingInfo,
    featureCompareInfo,
    filterDemoInfo,
} from "../Utils/data.js";
import Welcome from "./Welcome";

const App = (props) => {

    const { name, isPremium, freemius } = props;

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout {...props} />}>
                    <Route index element={<Welcome {...props} />} />

                    <Route path="welcome" element={<Welcome {...props} />} />

                    <Route
                        path="demos"
                        element={
                            <ListDemos demoInfo={demoInfo} {...props}>
                                {!isPremium && (
                                    <FSCheckoutButton
                                        {...{
                                            freemius,
                                            options: { title: name },
                                        }}
                                    >
                                        Buy Now
                                    </FSCheckoutButton>
                                )}
                            </ListDemos>
                        }
                    />

                    {/* {!isPremium && (
                        <Route
                            path="pricing"
                            element={
                                <Pricing pricingInfo={pricingInfo} options={{}} {...props} />
                            }
                        />
                    )} */}

                    {!isPremium && (
                        <Route
                            path="pricing"
                            element={
                                <Pricing pricingInfo={pricingInfo} options={{}} {...props} />
                            }
                        />
                    )}

                    <Route
                        path="filter-demos"
                        element={
                            <FilterDemos demoInfo={filterDemoInfo} {...props}>
                                {!isPremium && (
                                    <FSCheckoutButton
                                        {...{
                                            freemius,
                                            options: { title: name },
                                        }}
                                    >
                                        {/* {cartIcon} */}
                                        Upgrade Now
                                    </FSCheckoutButton>
                                )}
                            </FilterDemos>
                        }
                    />

                    {!isPremium && (
                        <Route
                            path="purchase"
                            element={
                                <FSCheckoutForm freemius={freemius} options={{ title: name }} />
                            }
                        />
                    )}

                    {!isPremium && (
                        <Route
                            path="feature-comparison"
                            element={
                                <FeatureCompare
                                    featureCompareInfo={featureCompareInfo}
                                    {...props}
                                />
                            }
                        />
                    )}

                    <Route path="*" element={<Navigate to="/welcome" replace />} />
                </Route>
            </Routes>
        </Router>
    );
};
export default App;
