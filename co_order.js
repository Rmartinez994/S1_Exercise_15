"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Rafael Martinez 
   Date: 4/11/19   
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/
window.addEventListener("load", function () {
      var orderForm = document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.model.focus();

      //calculate the cost of the order 
      calcOrder();
      //event handlers for the web form
      orderForm.elements.model.onchange = calcOrder;
      orderForm.elements.qty.onchange = calcOrder;

      var planOptions = documet.querySelectorAll('input[name="protection]');
      for (var i = 0; i < planOptions.length; i++) {
            planOptions[i].onclick = calcOrder;
      }
});

function calOrder() {
      var orderForm = document.forms.orderForm;
      //calculate the initial cost of the order
      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.options[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty[qIndex].value;

      //initial cost = model cost x quantity
      var initialCost = mCost + quantity;
      orderForm.elements.initialCost.value = formatUSCurrency(initialCost);

      //retrieve the cost of the user's protection plan
      var pCost = document.querySelector('input[name="protection]:checked')
            .value + quantity;
      orderForm.elements.protectionCost.value = formalNumber(pCost, 2);
      //calulate the order subtotal 
      orderForm.elements.suntotal.value = formalNumber(initialCost + pCost, 2);
      //calculate the sales tax
      var salesTax = 0.05(initialCost + pCost);
      orderForm.elements.salesTax.value = formalNumber(salesTax, 2);
      //calculate the cost of the total order
      var totalCost = initialCost + pCost + salesTax;
      orderForm.elements.totalCost.value = formalUSCurrency(totalCost);

}

function formalNumber(val, decimal) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      })
}

function formalUSCurrency(val) {
      return val.toLocaleString('en-us', {
            style: "currency",
            currency: "USD"
      })
};