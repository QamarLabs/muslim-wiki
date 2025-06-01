import { Button } from '@wordpress/components';
import { useNavigate } from 'react-router-dom';

type Props = {
    to: string;
}

export function LinkButton(props: React.PropsWithChildren<Props>) {
    const { to, children } = props;
    const navigate = useNavigate();

    const navigateTo = () => navigate(to);

    return (
        <Button
            type="button"
            variant="primary"
            onClick={navigateTo}
        >
            {children}
        </Button>
    );
}