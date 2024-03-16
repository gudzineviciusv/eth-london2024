import { FC } from 'react';
import { useWindowWidthAndHeight } from "../../hooks";

const styles = {
    content: {
        padding: "16px",
        overflow: "scroll"
    } as const,
    homepageContent: {
        marginTop: "50px",
    },
    contentMobile: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: "100px",
        padding: "10px 0",
        overflow: "hidden"
    }
} as const;

interface MainContentProps {
    children: React.ReactNode
}

const MainContent: FC<MainContentProps> = ({children}) => {
    const { isMobile } = useWindowWidthAndHeight();

    let style = styles.content;

    return (
        <div style={isMobile ? styles.contentMobile : style}>
            {children}
        </div>
    );
};

export default MainContent;
