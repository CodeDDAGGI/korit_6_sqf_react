function SetTimeoutTest() {
    /**
     * 비동기
     */

    setTimeout(()=>{
        print(count)
    },2000); // 함수의 매개변수 안에 함수를 전달하는 callback함수

    function print(fx) {
        console.log(4);
        fx(); // count 함수 호출
    }

    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    /**
     * 콜백함수
     */
    function test(fx) {
        console.log("test 함수 호출");
        fx(); // add 함수호출
    }

    function add() {
        console.log("add 함수 호출");
    }    

    test(add);

    return ( 
        <>
        </>
     );
}

export default SetTimeoutTest;