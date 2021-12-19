import {
    useState,
    useEffect
} from 'react';

const SessionTimeout = ({ children }) => {
    const [time, setTime] = useState(Date.now())

    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    useEffect(() => {
        const expireToken = () => {
            const user = JSON.parse(localStorage.getItem("user"));

            if (user) {
                const decodedJwt = parseJwt(user.accessToken);

                if (decodedJwt.exp * 1000 < time) {
                    localStorage.removeItem("user")
                    window.location.reload()
                }

                // console.log(decodedJwt.exp * 1000 < time)
            }
        }

        const interval = setInterval(() => {
            setTime(Date.now())
        }, 1000)

        expireToken()
        return () => clearInterval(interval)
    }, [time])

    return <>{children}</>;
};

export default SessionTimeout;