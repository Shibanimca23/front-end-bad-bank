import userContext from "./context";
import { useContext, useEffect, useState } from 'react';
import { Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
import './App.css'
import Footer from "./footer";

export default function Deposit() {

    const [deposit, setDeposit] = useState();
    const [data, setData] = useState([])
    var [total, setTotal] = useState();
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [details, setDetails] = useState(false);
    let [id, setId] = useState()

    useEffect(() => {
        async function fetchdata() {
            await axios.get('https://server-h269.onrender.com/data').then((item) => {
                setData(item.data);
                console.log(data);


            })
        }
        fetchdata();
    }, [total])

    function changeHandler(val, setter) {
        setter(val);
        deposit !== undefined ? document.querySelector(".create-btn").classList.remove("disabled") : document.querySelector(".create-btn").classList.add("disabled")
    }

    async function submitHandler(e) {
        e.preventDefault();
        // console.log(name);
        if (isNaN(deposit) || deposit < 0) {
            alert("Please enter a valid amount....")
        }
        else {

            await axios.put(`https://server-h269.onrender.com/update/${id}`, { amount: total + deposit }).then(setTotal(total + deposit)).then(alert(`amount ${deposit} is deposited successfully !`));

        }
    }

    function userHandler(e) {
        e.preventDefault()
        let currentUser = data.find((item) => item.name === name && item.password === pass)
        console.log("currentUser", currentUser);
        if (currentUser) {
            console.log(currentUser);
            setTotal(currentUser.amount);
            setId(currentUser._id)
            setDetails(true);
        }
        else {
            alert("Enter correct details")
        }


    }


    return (<>

        {
            !details ? <>
                <div id='form-div'>
                    <>

                        <Card>
                            <Form className="form-inline" onSubmit={userHandler}>
                                <h1>User Details</h1>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" placeholder="Enter userName" onChange={e => setName(e.target.value)} className="input-box"/>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPass(e.target.value)} className="input-box"/>
                                </Form.Group>

                                <Button type='submit' className='create-btn' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }} disabled={name === '' || pass === ''}>Enter</Button>
                                
                            </Form>
                        </Card> </>
                </div>
            </> : <>
                <div id='form-div'>
                    <>
                        <h3>Account Balance: {total} </h3>
                        <Card>
                            <Form className="form-inline" onSubmit={submitHandler}>
                                <h1>Deposit</h1>

                                <Form.Group className="mb-3">
                                    <Form.Control type="number" placeholder="Enter amount" onChange={(e) => changeHandler(Number(e.target.value), setDeposit)} className="input-box" />
                                </Form.Group>
                                <Button type='submit' className='create-btn disabled' style={{ backgroundColor: '#9d75cf', color: 'white', borderColor: '#9d75cf' }}>Deposit</Button>
                            </Form>
                        </Card> </>
                </div>
                <Footer position="fixed" />
            </>
        }

    </>)
}