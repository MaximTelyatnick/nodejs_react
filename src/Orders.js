import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OrderNote from './OrderForm/OrderForm'
import firebase from 'firebase/app';
import 'firebase/database';
import {firebaseApp, db} from "./Config/config"
import PropTypes from 'prop-types';
class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.changeOrder = this.changeOrder.bind(this);
        if (!firebase.apps.length) {
            this.app = firebaseApp;
        }
        this.database = db.ref().child('Orders');
        this.state = {
            orders: [],
        }
    }

    componentWillMount() {
        const previousNotes = this.state.orders;

        // DataSnapshot
        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                idOrder: snap.val().position_id,
                readyOrder: snap.val().read,
                nameOrder: snap.val().user_id,
            })

            this.setState({
                orders: previousNotes
            })
        })

    }
    changeOrder(noteId){
        console.log("from the parent: " + noteId);
        this.database.child(noteId).up;
    }

    render() {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Номер позиції</th>
                        <th>Ім'я</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    {

                        this.state.orders.map((order) => {
                            return (

                                <OrderNote

                                      key={order.id}
                                      idOrder = {order.idOrder}
                                      nameOrder = {order.nameOrder}
                                      readyOrder = {order.readyOrder}
                                      changeOrder ={this.changeOrder}

                                />

                            )
                        })

                    }

                </table>

            </div>
        );

    }
}export default Orders;


