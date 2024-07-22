import { atom } from 'recoil'

// 전역 상태
export const MainSidebarShowAtom = atom({
    key: "mainSidebarShowState", // key
    default:false                // value
});