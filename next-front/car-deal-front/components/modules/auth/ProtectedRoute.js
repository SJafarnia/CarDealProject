import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function ProtectedRoute(Component) {
    return function WithAuth(props) {
        const router = useRouter();

        useEffect(() => {
            // Check if the JWT token is present in the cookie
            const token = document.cookie.replace(
                /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
                '$1'
            );

            if (!token) {
                // Redirect to login page if the token is not present
                router.push('/login');
            }
        }, []);

        return <Component {...props} />;
    };
}