import React, { Component } from 'react';
import Employee from './Employee'

export default class EmployeeData extends Component {
    constructor(){
        super();
        this.state = {
            employee:[
                {name: 'Emp1', id: 100, designation:'Engineer'},
                {name: 'Emp2', id: 200, designation:'Director'},
                {name: 'Emp3', id: 300, designation:'CEO'}
            ] 
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.employee.map((item)=>{
                        return <Employee key={item.id} name={item.name} id={item.id} designation={item.designation} />
                    })
                }
            </div>
        )
    }
}

