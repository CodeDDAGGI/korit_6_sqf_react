/** @jsxImportSource @emotion/react */
import { useRecoilState } from "recoil";
import { MainSidebarShowAtom } from "../../atoms/mainSidebarShow";
import MainContainer from "../MainContainer/MainContainer";
import * as s from "./style";
import { FaBars } from "react-icons/fa";
// , 치면 fa관련 아이콘들 다나옴
function MainHeader() {
    const [ mainSidebarShow , setMainSidebarShow ] = useRecoilState(MainSidebarShowAtom);

    const handleMainMenuToggleClick = () => {
        setMainSidebarShow(true);
        // 무조건 여는 버튼    
    }

    return (
        <div css={s.layout}>
            <MainContainer>
                <div css={s.headerBody}>
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

export default MainHeader;
