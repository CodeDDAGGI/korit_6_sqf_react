function practice() {
    const mapper = [
        { id: "1"},
        { name: "2"},
        { id: "2"},
        { name: "3"}
    ]

    mapper.map((a , i) => {
        return{
            ...mapper,
            id : "5"
        }
        })
    console.log(mapper);

    
    return <>
    
    
    </>;
}

export default practice;