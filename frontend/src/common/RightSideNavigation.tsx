import { ExternalLink, Flex, FlexItem } from "@wordpress/components";
import { NavItem } from "../models/common";


type TogglerProps = {
    isMobile: boolean;
    toggleRightNav: () => void;
}
type Props = {
    isTablet: boolean;
    isMobile: boolean;
    leftNavOpen: boolean;
    rightNavOpen: boolean;
    toggleRightNav: () => void;
}


export function RightSideNavigationToggler({ toggleRightNav, isMobile }: TogglerProps) {
    return (
        <>
            {isMobile && (
                <button className="nav-toggle right" onClick={toggleRightNav}>
                    ☰
                </button>
            )}
        </>
    );
}

export default function RightSideNavigation(
    { isTablet, isMobile, rightNavOpen, toggleRightNav }: Props) {


    const rightNavItems: NavItem[] = [
        {
            id: 'tools',
            title: 'Tools',
            items: ['What links here', 'Related changes', 'Special pages', 'Printable version']
        },
        {
            id: 'languages',
            title: 'Languages',
            items: ['English', 'Español', 'Français', 'Deutsch', 'Italiano']
        }
    ];


    return (
        <>
            {/* Right Navigation */}
            {(rightNavOpen || !isMobile) && (
                <nav
                    className={`right-nav ${rightNavOpen ? 'mobile-open' : ''} ${isTablet ? 'tablet-popover' : ''}`}
                    style={{ display: isMobile && !rightNavOpen ? 'none' : 'block' }}
                >
                    {isTablet && (
                        <button className="close-nav" onClick={toggleRightNav}>
                            ×
                        </button>
                    )}
                    {rightNavItems.map((section) => (
                        <div key={section.id} className="nav-section">
                            <h3>{section.title}</h3>
                            <Flex as="ul" direction="column">
                                {section.items.map((item, index) => (
                                    <FlexItem key={index}>
                                        <ExternalLink className="mw-body mw-link" href="/tr">{item}</ExternalLink>
                                    </FlexItem>
                                ))}
                            </Flex>
                        </div>
                    ))}
                </nav>
            )}
        </>
    );
}