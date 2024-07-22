function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태 (then)
     * 3. 거부 -> 연산을 실패했을 때의 상태 (catch)
     * 
     * promise는 함수내에서만 정의가능
     */

    function p1(name) {  // 이행할때 사용  거부할떄 사용
            return new Promise((resolve , reject) => {
                // 대기(동기)
                console.log(name + "프로미스 생성");
                if(!name){
                    reject("오류!!!");
                }
                resolve(name); // resolve 실행시 then이 실행(이행), 실행안되면 대기상태
            }); // 출력되는 순간 = 대기상태 
    }
    
    async function p2() { // 프로미스 생성 함수
        let a = null;
        try {
            a = await p4();  // p4().then(r => a = r); // 비동기처리가 완료되기전에
            // setTimeout(() => {}, 2000); // 비동기처리이지만 await을 사용할 수 없음
            await p5();
        }catch(error){
            console.log(error);
            a = "p5";
        }
        return a; // 리턴이 동기가 되면서 a가 null로 출력댐
        // await을 하면 이행할때까지 기다림
        // await은 async안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다0
    }

    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3");
        });
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류!!!!")
    }
    

    const handleClick = () => { // 비동기 안에서의 동기
        p1("p1").then(result => { // then도 프로미스 생성
            console.log("이행");
            console.log(result);
            if(true){
                throw new Error("거부!!"); // 거부(reject)
            }
            return "두번째 then"; // 두번째 then  return 시 이행(resolve)
        }).then(result => {
            console.log(result); // 두번째 then의 result
        }).catch(error => {
            // console.log(error);
        });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p3("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r)
            }); 
        },2000)

        // p2().then(r => {
        //     console.log(r)
        // }); // return값이 바로 들어옴
        // p3().then(r => console.log(r));

    }
    
    return ( 
        <>
            <button onClick={handleClick}>promise</button>    
            <button onClick={handleClick2}>async</button>    
        </>
     );
}

export default PromiseTest;