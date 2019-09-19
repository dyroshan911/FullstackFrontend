/**
 * 高阶组件 其实是一个普通的函数，传入一个组件，返回一个新的组件
 */
import React, { Component } from "react";
import UserName from "./UserName";

export default class Memo extends Component {
    render() {
        return (
            <form>
                <UserName />
                留言 <textarea></textarea>
            </form>
        )
    }
}