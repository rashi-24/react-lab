import React from 'react';
import './hof.css';

class HigherOrderFunctions extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    allData = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    userType = () => {
        const data = this.state.userData;
        const filterRows = data.filter((item) => {
            return item.user_type === "Designer";
        });
        const mapRows = filterRows.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    startJ = () => {
        const data = this.state.userData;
        const filterRows = data.filter((item) => {
            return item.name.charAt(0) === 'J';
        });
        const mapRows = filterRows.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    ageData = () => {
        const data = this.state.userData;
        const filterRows = data.filter((item) => {
            return item.age>28 && item.age<=50;
        });
        const mapRows = filterRows.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    desYears = () => {
        const data = this.state.userData;
        const filterRows = data.filter((item) => {
            return item.user_type === "Designer";
        });
        const reduceRows = filterRows.reduce((sum, item) => {
            return sum + parseFloat(item.years)
        },0);
        return reduceRows;
    };
    render() {
        return (
        <div>
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                <ul>{this.allData()}</ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Display based on user type</h1>
                <div className="display-box">
                <ul>{this.userType()}</ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Filter all data starting with J</h1>
                <div className="display-box">
                <ul>{this.startJ()}</ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box">
                <ul>{this.ageData()}</ul>
                </div>
            </React.Fragment>
            <React.Fragment>
                <h1>Find the total years of the designers</h1>
                <div className="display-box">
                <ul>
                    <li className="list-elements">
                        <span>{this.desYears()}</span>
                    </li>
                </ul>
                </div>
            </React.Fragment>
        </div>
        )
    }
}

export default HigherOrderFunctions