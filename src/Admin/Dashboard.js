import { createRoot } from 'react-dom/client';

import './dashboard.scss';

import { dashboardInfo } from './Utils/data';
import App from './Component/App';


document.addEventListener('DOMContentLoaded', () => {
    const dashboardEl = document.getElementById("AudioDashboard");
    const info = JSON.parse(dashboardEl.dataset.info);
    console.log('data', info)
    createRoot(dashboardEl).render(<App {...dashboardInfo(info)} />);
});