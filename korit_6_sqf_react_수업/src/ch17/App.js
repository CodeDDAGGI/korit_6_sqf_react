/** @jsxImportSource @emotion/react */
import * as s from "./style";
// s에 style파일의 모든 css를 가져옴

function App() {
    return (
        <div css={s.container(400)}>
            <div css={s.container2}>
                <div css={s.container3}>

                </div>
            </div>
        </div>
    );
}

export default App;

