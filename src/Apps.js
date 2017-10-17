import React, {Component} from 'react'
import Menu from './Menu'
import Main from './Main'


class Apps extends  Component{
    render(){
        return(
            <div>
                <Menu />
                <Main />
            </div>
        );
    }
}
export default Apps;