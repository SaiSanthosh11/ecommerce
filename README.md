# ecommerce
My Store
This is a dynamic shopping cart application that fetches product data from the Fake Store API. Users can search for products, add them to their cart, view their total billing (including discounts, platform fees, and shipping charges), and place orders.

Table of Contents
1.Features
2.Technologies Used
3.Project Structure
4.Setup Instructions
5.How It Works
6.Customization

Features
1.Product Listing: Fetches and displays products dynamically from the Fake Store API.
2.Cart Functionality:
->Users can add products to the cart.
->The cart items are displayed in a column with the ability to increase or decrease quantity or remove items.
3.Billing Summary:
->Includes Total MRP (before discounts).
->Applies Coupon Discounts (adjustable in code).
->Adds Platform Fees and Shipping Charges to the total.
4.Search Functionality: Users can search for products dynamically by title.
5.Responsive Design: The layout adjusts to different screen sizes, with cart items and payment summary displayed side by side on larger screens.

Technologies Used
->HTML5: For structuring the page layout.
->CSS3: For styling and responsiveness, including hover effects and layout.
->JavaScript (ES6): For dynamic behavior, such as fetching data, updating the cart, and calculating billing.

Project Structure
index.html         # The main HTML file that contains the structure of the application.
cart.js            # JavaScript file handling the logic for cart management and billing.
README.md          # Project documentation (this file).


Setup Instructions
1. Clone the Repository

git clone <repository-url>
cd <repository-folder>


2. Open the Project
Simply open the index.html file in your browser to view the shopping cart functionality.



How It Works
1.Product List:

Products are fetched from the Fake Store API and displayed on the page with an image, title, description, and price.
2.Adding Items to the Cart:

3.Clicking on the "Add to Cart" button will add the selected product to the cart. If the product is already in the cart, its quantity will be increased.
Cart Operations:

Users can increase, decrease, or remove items from the cart.
Cart items are listed in a column, with a product image, quantity, and subtotal.
4.Payment Section:

The payment section beside the cart displays:
Total MRP (sum of all product prices without discounts).
Coupon Discount (applied automatically).
Platform Fee and Shipping Charges (fixed).
Total Amount (final amount after applying discounts and fees).
5.Checkout:

Clicking the "Place Order" button will display an alert with the total amount, and the cart will be cleared after the order is placed.


Customization
Coupon Discount:

->The couponDiscount variable in cart.js can be modified to change the percentage of discount applied to the total MRP.

let couponDiscount = 0;  // Set the discount percentage (e.g., 10 for 10%)

->Platform Fee and Shipping Charges:

Modify the platformFee and shippingCharges variables in cart.js to adjust the extra fees applied to the order.

let platformFee = 10;   // Platform fee in dollars
let shippingCharges = 5; // Shipping charges in dollars

Styling:

The CSS provided can be further customized in the <style> section of index.html. You can change colors, fonts, button styles, and more to suit your design preferences.



Future Enhancements
->User Authentication: Allow users to log in and save their cart between sessions.
->Advanced Search: Include filtering options like category, price range, etc.
->Dynamic Discounts: Allow users to input coupon codes for discounts.


![Screenshot 2024-09-24 233218](https://github.com/user-attachments/assets/6e97ad7e-dc58-4e4d-8057-618ddd843692)
![Screenshot 2024-09-24 233341](https://github.com/user-attachments/assets/26320cdd-6974-46f0-b33c-8a38ff19a766)
![image](https://github.com/user-attachments/assets/6e056299-4533-42a6-a505-3e62a2fd77d2)
