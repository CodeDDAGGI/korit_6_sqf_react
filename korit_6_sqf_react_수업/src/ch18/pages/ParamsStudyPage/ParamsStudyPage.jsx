import React from 'react';
import { useParams } from 'react-router-dom';

function ParamsStudyPage(props) {
    // path의 조건을 맞춰줘야 댐 "/params/:name/:age"
    const params = useParams();
    console.log(params.name);

    return (
        <div>
            
        </div>
    );
}

export default ParamsStudyPage;