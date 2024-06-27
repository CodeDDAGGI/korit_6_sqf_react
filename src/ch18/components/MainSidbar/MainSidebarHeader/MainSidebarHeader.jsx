/** @jsxImportSource @emotion/react */
import { FaBars, FaBook } from "react-icons/fa";
import MainContainer from "../../MainContainer/MainContainer";
import * as s from "./style";
import { MainSidebarShowAtom } from "../../../atoms/mainSidebarShow";
import { useRecoilState } from "recoil";

function MainSidebarHeader() {
    // setter 사용해야하는데 atom으로 전역으로 받음
    const [ mainSidebarShow , setMainSidebarShow ] = useRecoilState(MainSidebarShowAtom);

    const handleMainMenuToggleClick = () => {
        setMainSidebarShow(false);
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.header}>
                    <h1 css={s.title}>
                        <FaBook />
                        <span>수업자료</span>
                    </h1>
                    <button 
                        css={s.menuToggleButton} 
                        onClick={handleMainMenuToggleClick}
                    >
                            <FaBars />
                    </button>
                </div>
            </MainContainer>
        </div>
    );
}

export default MainSidebarHeader;