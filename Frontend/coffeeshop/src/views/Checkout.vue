<template>
  <div class="container">
    <div class="py-5 text-center">
      <img class="d-block mx-auto mb-4" src="../assets/images/cf.jpg" alt width="100" height="72" />
      <h2>Checkout form</h2>
      <p class="lead">In Development</p>
    </div>
    <h4 class="d-flex justify-content-center">Your cart</h4>
    <hr/>
    <div class="row">
     
      <!-- Shopping cart table -->
      
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" class="border-0">
                    <div class="p-2">
                      <img src="../assets/images/coffee-sample.png" alt="" width="70" class="img-fluid rounded shadow-sm">
                      <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Latte</a></h5>
                      </div>
                    </div>
                  </th>
                  <td class="border-0 align-middle"><strong>$5.75</strong></td>
                  <td class="border-0 align-middle"><strong>3</strong></td>
                  <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a></td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="p-2">
                      <img src="../assets/images/coffee-sample.png" alt="" width="70" class="img-fluid rounded shadow-sm">
                      <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Flat white</a></h5> 
                      </div>
                    </div>
                  </th>
                  <td class="align-middle"><strong>$5.75</strong></td>
                  <td class="align-middle"><strong>3</strong></td>
                  <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div class="p-2">
                      <img src="../assets/images/coffee-sample.png" alt="" width="70" class="img-fluid rounded shadow-sm">
                      <div class="ml-3 d-inline-block align-middle">
                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">ESPRESSO</a></h5>
                      </div>
                    </div>
                        </th>
                    <td class="align-middle"><strong>$6.25</strong></td>
                    <td class="align-middle"><strong>3</strong></td>
                    <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- End -->
           <div class="row py-5 p-4">
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Coupon code</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have a coupon code, please enter it in the box below</p>
            <div class="input-group mb-4 border rounded-pill p-2">
              <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0">
              <div class="input-group-append border-0">
                <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
              </div>
            </div>
          </div>
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Instructions for seller</div>
          <div class="p-4">
            <p class="font-italic mb-4">If you have some information for the seller you can leave them in the box below</p>
            <textarea name="" cols="30" rows="2" class="form-control"></textarea>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">Order summary </div>
          <div class="p-4">
            <p class="font-italic mb-4">Shipping and additional costs are calculated based on values you have entered.</p>
            <ul class="list-unstyled mb-4">
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$53.25</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Tax</strong><strong>$0.00</strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Coupon</strong><strong><i>-$0.00</i></strong></li>
              <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                <h5 class="font-weight-bold">$63.25</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- end -->
      
      <!-- User details -->
     
      <div class="container order-md-1">
        <br><br>
        <h4 class="d-flex justify-content-center">Billing address</h4>
        <hr/>
        <form class="needs-validation" novalidate><!-- *TODO* validation -->
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder value required />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder value required />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>
          </div>

          <!-- *TODO send email -->
          <div class="mb-3">
            <label for="email">
              Email
              <span class="text-muted">(Optional)</span>
            </label>
            <input type="email" class="form-control" id="email" placeholder="you@example.com" />
            <div class="invalid-feedback">Please enter a valid email address for shipping updates.</div>
          </div>

          <div class="mb-3">
            <label for="address">Address line 1</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="1234 Main St"
              required
            />
            <div class="invalid-feedback">Please enter your shipping address.</div>
          </div>

          <div class="mb-3">
            <label for="address2">
              Address  line 2
              <span class="text-muted">(Optional)</span>
            </label>
            <input type="text" class="form-control" id="address2" placeholder />
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select class="custom-select d-block w-100" id="country" required>
                <option value>Choose...</option>
                <option>Australia</option>
              </select>
              <div class="invalid-feedback">Please select a valid country.</div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <select class="custom-select d-block w-100" id="state" required>
                <option value>Choose...</option>
                <option>VIC</option>
                <option>NSW</option>
                <option>QLD</option>
                <option>SA</option>
                <option>TAS</option>
                <option>WA</option>
              </select>
              <div class="invalid-feedback">Please provide a valid state.</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="postcode">Postcode</label>
              <input type="text" class="form-control" id="zip" placeholder required />
              <div class="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr class="mb-4" />
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="same-address" />
            <label
              class="custom-control-label"
              for="same-address"
            >Shipping address is the same as my billing address</label>
          </div>
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="save-info" />
            <label class="custom-control-label" for="save-info">Save this information for next time</label>
          </div>
          <hr class="mb-4" />

          <h4 class="mb-3">Payment</h4>

          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                checked
                required
              />
              <label class="custom-control-label" for="credit">Credit card</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                required
              />
              <label class="custom-control-label" for="debit">Debit card</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                class="custom-control-input"
                required
              />
              <label class="custom-control-label" for="paypal">Paypal</label>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder required />
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">Name on card is required</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder required />
              <div class="invalid-feedback">Credit card number is required</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder required />
              <div class="invalid-feedback">Expiration date required</div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder required />
              <div class="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr class="mb-4" />
          <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>
  </div>
  
</template>
