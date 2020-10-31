import React from 'react'
import '../index.css';

function Checkout() {
    return (
        <div>
            
            <div className="container">
            <h3>Let's Get You Checked Out!</h3>
            <h4>Where are we shipping your order?</h4>

                <div className="row">
                    <form className="col-lg-4">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" />
                        </div>
                        <div class="form-group">
                            <label for="address1">Street Address</label>
                            <input type="text" class="form-control" id="address1" />
                        </div>
                        <div class="form-group">
                            <label for="address2">Street Address #2</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                    </form>

                    <form className="col-lg-4">
                        <div class="form-group">
                            <label for="city">City</label>
                            <input type="text" class="form-control" id="city" />
                        </div>
                        <div class="form-group">
                            <label for="state">State</label>
                            <input type="text" class="form-control" id="state" />
                        </div>
                        <div class="form-group">
                            <label for="zipCode">Zip Code</label>
                            <input type="text" class="form-control" id="zipCode" />
                        </div>

                        <br />
                        <br />
                    </form>

                    <form className="col-lg-4">
                        <div class="form-group">
                            <label for="cardSelect">Select Card &nbsp; </label>
                            <select>
                                <option>VISA</option>
                                <option>MasterCard</option>
                                <option>American Express</option>
                                <option></option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="cardName">Name On Card</label>
                            <input type="text" class="form-control" id="cardName" />
                        </div>
                        <div class="form-group">
                            <label for="cardNumber">Card Number</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label for="cvv">CVV</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label for="expiration">Expiration Date</label>
                            <input type="text" class="form-control" id="expiration" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>

    )
}

export default Checkout;