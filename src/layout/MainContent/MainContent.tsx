import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import {useWindowWidthAndHeight} from "../../hooks";

type Style = {
    marginTop: string,
    padding?: string,
}

const styles = {
    content: {
        marginTop: "50px",
        padding: "50px",
    } as Style,
    homepageContent: {
        marginTop: "50px",
    },
    contentMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "100px",
        padding: "30px 0",
        overflow: "hidden"
    }
} as const;

interface MainContentProps {
    children: React.ReactNode
}

const MainContent: FC<MainContentProps> = ({children}) => {
    const { isMobile } = useWindowWidthAndHeight();
    const location = useLocation();

    let style = styles.content;
    if (location.pathname === '/') {
        style = styles.homepageContent;
    }

    return (
        <div style={isMobile ? styles.contentMobile : style}>
            {children}
        </div>
    );
};

export default MainContent;
