## 프로젝트 생성
-npx create-react-app 프로젝트명

## 라이브러리 설치
- 라우터 > npm i react-router-dom
- Emotion > npm i @emotion/react
- Recoil > npm i recoil
- React Icons > npm i react-icons
- Sweetalert2 > npm i sweetalert2
- 리액트 모달 라이브러리 > npm i --save-dev @types/react-modal
- npm i axios 리액트 json 자동 변환 라이브러리
- npm install react-icons 리액트 아이콘 라이브러리


## JSX 자동완성
- Ctrl + Shift + p 
- user settings.json(vscode 사용자 설정) 선택
- 아래 설정 추가
```json
    "emmet.syntaxProfiles": {
     "javascript": "jsx" 
     },
    "emmet.includeLanguages": {
    "javascript": "html"
    },
```

#사용자 설정 스니펫
```json
"emotionJsx": {
		"prefix": "ej", // 단축키
		"body": [
			"/** @jsxImportSource @emotion/react */" ,
			"import * as s from \"./style\";",
		], // 단축키 실행될 몸체
		"description" :"이모션 JSX Import"
	}
```

## 확장기능(Extension)
- reactjs code snippets
- vscode-color-picker
- vscode-styled-components

## 터미널 선택
- Ctrl + Shift + p
- terminal: select Default Profile 선택
- gitBash 선택

## 폴더 구조
- components
- pagaes
- constants
- styles
- hooks
- configs
- utils
- atoms
- assets => 이미지
- apis(services)
- store

## 주요 Hook 함수
- useState(기본값)
- useEffect(() => {} , [])
- useRef(기본값)
- useMemo(() => 리턴, [])
- useCallback(() => {}, [])
- useRecoilState(atom)
- useNavigate()
- useLocation()
- useParams()
- useSearchParams()

## 명명규칙
- Component 이름은 대문자로 시작
- 하나의 Component폴더에는 하나의 
Component.jsx파일, style.js파일로 구성 
- constants 폴더에 들어가는 상수들은 대문자와 스네이크 표기법으로 작성
- 이벤트 함수명은 handle로 시작해서 이벤트 명으로 끝낸다.

## 서버 요청 코드
- https://hongong.hanbit.co.kr/http-%EC%83%81%ED%83%9C-%EC%BD%94%EB%93%9C-%ED%91%9C-1xx-5xx-%EC%A0%84%EC%B2%B4-%EC%9A%94%EC%95%BD-%EC%A0%95%EB%A6%AC/