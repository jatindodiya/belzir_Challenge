# Interview Challenge - Round 1

## Objective:
Develop a microservices-based full-stack application. The application must include at least **three microservices**:
1. **SSO Authentication** (Google Sign-In)
2. **Notification** (Email notifications)
3. **Purchases** (Creating and approving purchase requests)

The frontend should be built in **React**, and the backend should be in **Node.js**.

## Submission Requirements:
1. Complete source code for both the frontend and backend.
2. A step-by-step guide explaining the implementation, enabling your team members to set up and run the application.

---

## Work-Flow:

### Step 1: User Login
- A user logs into the application using Google Sign-In.
- Once the user is successfully logged in, the **Notification service** should send an email notification confirming the login.

### Step 2: Create Purchase Request
- After logging in, the user (purchase requester) should be able to see a **Customer Dashboard**.
- In the dashboard, there should be a link to create a new purchase request with the following properties:
  - Item Name
  - Quantity Required
  - Unit Price
  - Total Price
  - Shipping/Delivery Charges
  - Tax Amount
  - Superior's (Manager) Email Address
- Once all the required details are provided, the user can submit the purchase request.
- This submission should trigger an email notification to both the **purchase requester** and their **superior** for the required approval.

### Step 3: User Logout
- The user (purchase requester) should be able to log out using their Google account.
- Before logging out, the **Notification service** should send an email notification confirming the successful log-off.

### Step 4: Superior/Manager Login
- The superior (purchase approver) logs in using their Google account.
- Once logged in, the **Notification service** should send an email notification confirming the login.

### Step 5: Approve Purchase Request
- The superior (purchase approver) should see a **Customer Dashboard** that shows pending purchase requests.
- They should be able to approve the pending purchase request.
- This approval should trigger an email notification to both the **purchase requester** and the **superior** indicating the purchase request's approved status.

### Step 6: Superior/Manager Logout
- The superior (purchase approver) logs out using their Google account.
- Before logging out, the **Notification service** should send an email notification confirming the successful log-off.

### Step 7: Purchase Requester Login (Post-Approval)
- The user (purchase requester) logs back into the application using Google Sign-In.
- Once logged in, the **Notification service** should send an email notification confirming the login.

### Step 8: View Approved Purchase Request
- After successfully logging in, the **purchase requester** should be able to see the **approved status** of their purchase request.

---

### Additional Notes:
- Ensure your project is organized with separate microservices for **SSO Authentication**, **Notification**, and **Purchases**.
- Use **JWT** or **OAuth2** for authentication and authorization.
- Notifications must be sent using **Email Service Providers** like **SendGrid** or **NodeMailer**.
