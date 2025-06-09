import { ExternalLink, Flex, FlexItem } from "@wordpress/components";
import { NavItem } from "../models/common";

type TogglerProps = {
  isMobile: boolean;
  toggleLeftNav: () => void;
}

type Props = {
  isTablet: boolean;
  isMobile: boolean;
  leftNavOpen: boolean;
  toggleLeftNav: () => void;
  rightNavOpen: boolean;
}

export function LeftSideNavigationToggler({ toggleLeftNav, isMobile }: TogglerProps) {
  return (
    <>
      {isMobile && (
        <button className="nav-toggle left" onClick={toggleLeftNav}>
          ☰
        </button>
      )}
    </>
  );
}

export default function LeftSideNavigation(
  { isTablet, isMobile, leftNavOpen, toggleLeftNav }: Props) {
  // Mock navigation data
  const leftNavItems: NavItem[] = [
    {
      id: 'navigation',
      title: 'Navigation',
      items: ['Main page', 'Contents', 'Current events', 'Random article', 'About Wikipedia']
    },
    {
      id: 'contribute',
      title: 'Contribute',
      items: ['Help', 'Learn to edit', 'Community portal', 'Recent changes', 'Upload file']
    }
  ];

  return (
    <>
      {/* Left Navigation */}
      {(leftNavOpen || !isMobile) && (
        <nav
          className={`left-nav ${leftNavOpen ? 'mobile-open' : ''} ${isTablet ? 'tablet-popover' : ''}`}
          style={{ display: isMobile && !leftNavOpen ? 'none' : 'block' }}
        >
          {isTablet && (
            <button className="close-nav" onClick={toggleLeftNav}>
              ×
            </button>
          )}
          {leftNavItems.map((section) => (
            <div key={section.id} className="nav-section">
              <h3>{section.title}</h3>
              <Flex as="ul" direction="column">
                {section.items.map((item: any, index: number) => (
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