import { useNavigate } from 'react-router-dom';

export default function PrivatePage({children}) {
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem('trackit'));

    if (auth) {
        return (
            <>
                {children}
            </>
        )
    }
    else {
        navigate('/');
    }
}