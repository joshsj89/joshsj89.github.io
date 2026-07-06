import { useNavigate, useLocation } from 'react-router-dom';

type NavLinkButtonProps = {
    children: React.ReactNode;
    to: string;
    onClick?: () => void;
    className?: string;
};

function NavLinkButton({ children, to, className, onClick }: NavLinkButtonProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        onClick?.();
        if (location.pathname === to) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'instant' }); // Scroll to top instantly when navigating to a new page
            if (to) {
                navigate(to);
            }
        }
    };

    return (
        <button className={className} onClick={handleClick}>
            {children}
        </button>
    );
}

export default NavLinkButton;