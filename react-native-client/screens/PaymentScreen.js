import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const RAZORPAY_ID_KEY = "rzp_live_QuFLFbns5bGiIY"
const RAZORPAY_SECRET_KEY = "sfUQT0yrOfJrS379640sAEVg"

const PaymentScreen = () => {
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handlePayment = () => {
        // Replace these values with your event-specific details
        const eventData = {
            amount: amount, // Amount in paisa (e.g., 100 INR)
            event_id: event_id,
        };

        fetch('https://4ded-49-248-167-18.ngrok-free.app/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    const options = {
                        description: 'Event Payment',
                        image: 'YOUR_EVENT_IMAGE_URL',
                        currency: 'INR',
                        key: RAZORPAY_ID_KEY,
                        amount: data.amount,
                        name: 'Event Name',
                        order_id: data.order_id,
                        prefill: {
                            email: data.email,
                            contact: data.contact,
                            name: data.name,
                        },
                        theme: { color: '#F37254' }, // Customize theme color
                    };

                    RazorpayCheckout.open(options)
                        .then((paymentResponse) => {
                            console.log('Payment success:', paymentResponse);
                            setPaymentSuccess(true);
                        })
                        .catch((error) => {
                            console.log('Payment error:', error);
                            // Handle payment failure
                        });
                } else {
                    // Handle server error
                    console.error('Server error:', data.msg);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <View>
            {paymentSuccess ? (
                <Text>Payment Successful!</Text>
            ) : (
                <Button title="Pay Now" onPress={handlePayment} />
            )}
        </View>
    );
};

export default PaymentScreen;
