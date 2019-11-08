import React from 'react';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='panel-body'>
            <ul className="list-group">
                <li className="list-group-item">
                    {/* 给checkbox分组 */}
                    <input type="checkbox" name='todo' />
                    <span>吃饭</span>
                    <a href="javascript;" className='btn-danger'>删除</a>
                </li>
            </ul>
        </div>
    }
}