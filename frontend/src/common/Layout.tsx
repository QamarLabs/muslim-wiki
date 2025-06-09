import { useState, useEffect, useMemo } from "react";
import LeftSideNavigation from "./LeftSideNavigation";
import RightSideNavigation from "./RightSideNavigation";
import { Flex } from "@wordpress/components";
import { useLocation } from "react-router";

type Props = {}

export default function Layout({ children }: React.PropsWithChildren<Props>) {
    const { pathname } = useLocation();
    const [leftNavOpen, setLeftNavOpen] = useState(false);
    const [rightNavOpen, setRightNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);


    const toggleLeftNav = () => {
        setLeftNavOpen(!leftNavOpen);
        if (rightNavOpen) setRightNavOpen(false);
    };

    const toggleRightNav = () => {
        setRightNavOpen(!rightNavOpen);
        if (leftNavOpen) setLeftNavOpen(false);
    };

    const routesToShowLayout = useMemo(() => [
        /search/i,
        /articles/i,
        /\/search\b/i,
        /\/articles\b/i
    ], [])

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if(routesToShowLayout.some(r => r.test(pathname))) 
        return (
                    <Flex align="flex-start" justify="space-between" style={{ marginTop: '12.5vh'}}>
                        {/* <LeftSideNavigation
                            isMobile={isMobile}
                            isTablet={isTablet}
                            leftNavOpen={leftNavOpen}
                            rightNavOpen={rightNavOpen}
                            toggleLeftNav={toggleLeftNav}
                        /> */}
                        {children}
                        {/* <RightSideNavigation
                            isMobile={isMobile}
                            isTablet={isTablet}
                            leftNavOpen={leftNavOpen}
                            rightNavOpen={rightNavOpen}
                            toggleRightNav={toggleRightNav}
                        /> */}
                    </Flex>
        );
    else 
        return <>{children}</>;
}