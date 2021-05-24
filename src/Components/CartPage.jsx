import React, { useEffect, useState } from 'react'

// TABLE :
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// Geting Cart From GlobalState :
import { useSelector, useDispatch } from 'react-redux'
import add from '../GlobalStates/actions/index';
import {remove} from '../GlobalStates/actions/index';

// CSS :
import '../CSS/Cart.scss'


// TABLE COMPONENT :
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 400,
    },
});


// Table Component :
const MyTable = ({ data }) => {

    const classes = useStyles();

    const dispatch = useDispatch();

    const qtyBtn = {
        backgroundColor : "#ed1b24",
        border : "2px solid #ed1b24",
        padding : "0",
        color : "white"
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>NO.</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Price&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">Quantity&nbsp;</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, key) => (
                        <StyledTableRow key={key}>
                            <StyledTableCell component="th" scope="row">
                                {key + 1}
                            </StyledTableCell>
                            <StyledTableCell align="right">{item.title}</StyledTableCell>
                            <StyledTableCell align="right">{item.price}</StyledTableCell>
                            <StyledTableCell align="right"> <Button onClick={ ()=> dispatch(remove(item)) } style={qtyBtn}> <RemoveIcon/> </Button> {item.qty} <Button onClick={ ()=> dispatch(add(item)) } style={qtyBtn}> <AddIcon/> </Button> </StyledTableCell>
                        </StyledTableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// Main CartPage Component :
const CartPage = () => {

    var cartItems = useSelector((state) => state.addToCart)

    // var productCart = JSON.parse(localStorage.getItem('cart'))
    // const [sum, updateSum] = useState(0)

    // var t = Object.entries(productCart).map((item , key)=>{
    //     var p = Number(item[1][2])
    //     var q = Number(item[1][0])
    //     return(p * q)
    // })
    // var as = t.reduce((x,y)=> x+y , 0)
    // useEffect(() => {
    //     updateSum(as)
    // }, [])

    return (
        <div className="cart_container">
            <div className="cart_box">
                <h2>SHOPING CART </h2> <hr />

                {
                    cartItems.length === 0 ? (<> <h1>YOUR CART IS EMPTY</h1> </>)
                        : (
                            <div className="cart_data">
                                <MyTable data={cartItems} />
                            </div>
                        )
                }
                {cartItems[0]?.qty}

                <div className="checkout">
                    <hr />
                    <div className="total">
                        <p>Subtotal</p>
                        <p className="amount">******</p>
                    </div>
                    <div className="checkout_btn">
                        <button className="btn">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const HideCart = (props) => {
    return (
        <>
            <div className="hidecart_container" onClick={props.click}>

            </div>
        </>
    )
}

export { CartPage, HideCart };
