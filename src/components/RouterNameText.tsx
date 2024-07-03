import { useLocation } from 'react-router-dom';
const RouterNameText = () => {
    const location = useLocation();
    const pathname = location.pathname;
    let pageName = pathname.substring(1);
    pageName = pageName === '' ? "Tracking" : pageName.charAt(0).toUpperCase() + pageName.slice(1);
    return (
        <h1 style={{ margin: '15px 16px' }}>{pageName}</h1>
    );
};
export default RouterNameText;