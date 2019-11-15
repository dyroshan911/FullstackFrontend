import React from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";


function Page1_2(props) {
    let { test } = useParams();
    console.log(props);
    

    return <div>
        这里是page1-2 <br />
        param = {test}
    </div>
}


export default connect()(Page1_2);