# Challenge for Interview Round-1

We need to assess your coding capability and management skills at first. Therefore, you need to
develop microservices-based Full stack basic application, which must have at least 3 micro-services
(SSO Authentication, Notification & purchases) in which user first need create purchase request, which
needs to be approved from his/her superior. Frontend in React and Backend need to be developed in
NodeJS.

Submission Requirement:

1. Your complete source codes
2. Step-by-step implementation guide for your team member, who should be able to implement


your application using your source codes and step-by-step user guide.

Work-Flow:

Step-01:
User need to log into your application using his google account. Once user logged into your
application, then notification service should send E-mail notification for this successful login.

Step-02:
Now there should be customer dashboard visible to the logged-in user (purchase requester)
in which there should have a link to create new purchase request with following properties.
• Item Name
• Quantity required
• Unit Price
• Total Price
• Shipping/Delivery charges
• Tax amount
User should provide his/her superior’s E-mail address. Once all above required information
is provided then user should create his/her purchase request. This creation of new purchase
request should trigger Email notification to both persons (purchase requestor and his/her
superior) for required approval.

Step-03:
User (purchase requester) need to click to log out from your application using his google
account. Before logging out the user logged from your application, notification service in
your application should send E-mail notification for this successful log-off.

Step-04:
• Now superior/Manager user will log into your application using his google account. Once
user logged into your application, then notification service should send E-mail notification
for this successful login.

Step-06:
• Now, there should be customer dashboard visible to the logged-in user (purchase Approver)
which indicate the purchase request need to be approved and he/she should be able to
approve this pending purchase request. This approval of pending purchase request should
trigger Email notification to both persons (purchase requestor and his/her superior) for new
approved status.

Step-07:
User (purchase Approver) need to click to log out from your application using his google
account. Before logging out the user logged from your application, notification service in
your application should send E-mail notification for this successful log-off.

Step-08:
• User (purchase requester) need to log into your application using his google account. Once
user logged into your application, then notification service should send E-mail notification
for this successful login.

Step-09:
• After successful logged-in, the purchase requester user showed be able to see approved
status of his/her purchase request.
Workflow process diagram
