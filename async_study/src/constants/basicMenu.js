import { IoCreateOutline , IoSearchOutline , IoRemoveCircleOutline  } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";

export const BASIC_MENU = [
    {
        id: 1,
        name: "POST요청",
        path: "/async/basic/post",
        icon: <IoSearchOutline />
    },
    {
        id: 2,
        name: "GET요청",
        path: "/async/basic/get",
        icon: <IoCreateOutline />
    },
    {
        id: 3,
        name: "PUT요청",
        path: "/async/basic/put",
        icon: <CiEdit/>
    },
    {
        id: 4,
        name: "DELETE요청",
        path: "/async/basic/delete",
        icon: <IoRemoveCircleOutline/>
    },
    {
        id: 5,
        name: "POST2요청",
        path: "/async/basic/post2",
        icon: <IoCreateOutline/>
    },
    {
        id: 6,
        name: "Promise학습",
        path: "/async/basic/promise",
        icon: <IoCreateOutline/>
    },
    {
        id: 7,
        name: "Test",
        path: "/async/basic/test",
        icon: <IoCreateOutline/>
    }

];