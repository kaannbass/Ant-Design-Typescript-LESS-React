import { useLocation } from 'react-router-dom';
const RouterNameText = () => {
    const location = useLocation();
    const pathname = location.pathname;
    let pageName = pathname.substring(1);
    pageName = pageName === '' ? "Tracking" : pageName.charAt(0).toUpperCase() + pageName.slice(1);
    return (
        <h1 style={{ margin: '20px 20px',fontSize:35 }}>{pageName}</h1>
    );
};
export default RouterNameText;