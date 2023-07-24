$(document).ready(function () {
    // Function to update the total price
    function updateTotalPrice() {
        var totalPrice = 0;
        // Loop through each item to calculate the total price
        $('.item').each(function () {
            var $item = $(this);
            var quantity = parseInt($item.find('input[name="name"]').val());
            var priceStr = $item.find('.total-price').text();
            var price = parseFloat(priceStr.replace(/[^0-9.,]+/g, '').replace(',', '.'));
            totalPrice += quantity * price;
        });
        // Update the total price element
        $('#cart-total').text(totalPrice.toFixed(2).replace('.', ',') + ' TND');
    }

    // Handle the "Like" button
    $('.like-btn').on('click', function () {
        $(this).toggleClass('is-active');
    });

    // Handle the "Minus" button
    $('.minus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div.quantity').find('input[name="name"]');
        var value = parseInt($input.val());

        if (value > 1) {
            value = value - 1;
        } else {
            value = 1; // Set a minimum value of 1
        }

        $input.val(value);
        updateTotalPrice(); // Update the total price after changing the quantity
    });

    //the "Plus" button
    $('.plus-btn').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var $input = $this.closest('div.quantity').find('input[name="name"]');
        var value = parseInt($input.val());

        if (value < 100) {
            value = value + 1;
        } else {
            value = 100; // Set a maximum value of 100
        }

        $input.val(value);
        updateTotalPrice(); // Update the total price after changing the quantity
    });

    //the "Delete" button with a confirmation alert
    $('.delete-btn').on('click', function () {
        var result = confirm('Are you sure you want to remove this item from your cart?');
        if (result) {
            $(this).closest('.item').remove();
            updateTotalPrice(); // Update the total price after removing the item
        }
    });

    // Update the total price
    updateTotalPrice();
});






//MADE BY MOATAZ BEN YOUNES