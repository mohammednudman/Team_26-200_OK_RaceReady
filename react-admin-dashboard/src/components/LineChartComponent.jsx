import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {useEffect, useState} from 'react';

const data = [
    {name: 'Jan', revenue: 1000},
    {name: 'Feb', revenue: 1200},
    {name: 'Mar', revenue: 800},
    {name: 'Apr', revenue: 1500},
    {name: 'May', revenue: 1000},
    {name: 'June', revenue: 1200},
    {name: 'July', revenue: 800},
    {name: 'Aug', revenue: 1500},
    {name: 'Sep', revenue: 1000},
    {name: 'Oct', revenue: 1200},
    {name: 'Nov', revenue: 800},
    {name: 'Dec', revenue: 1500},
    // Add more data points for each month
];

const MyComponent = () => {
    // Initialize the initial margin values
    const initialMargin = {top: 32, right: 30, left: 20, bottom: 5};

    // State to store the responsive margin values
    const [responsiveMargin, setResponsiveMargin] = useState(initialMargin);

    // Function to update the responsive margin based on window size
    const updateResponsiveMargin = () => {
        const windowWidth = window.innerWidth;

        // Calculate the responsive margin values based on window size
        const updatedMargin = {
            top: windowWidth >= 1024 ? 32 : 16,
            right: windowWidth >= 1024 ? 30 : 15,
            left: windowWidth >= 1024 ? 20 : 10,
            bottom: windowWidth >= 1024 ? 5 : 2,
        };

        setResponsiveMargin(updatedMargin);
    };

    // Add an event listener to update the responsive margin when the window resizes
    useEffect(() => {
        updateResponsiveMargin();
        window.addEventListener('resize', updateResponsiveMargin);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateResponsiveMargin);
        };
    }, []);
}

const BarChartComponent = () => {
    const initialMargin = {top: 32, right: 30, left: 20, bottom: 5};
    const [responsiveMargin, setResponsiveMargin] = useState(initialMargin);
    return (
        <div style={{margin: responsiveMargin}}>
            {/* Your content goes here */}
            <BarChart
                width={800}
                height={250}
                data={data}
                // margin={{ top: 32, right: 30, left: 20, bottom: 5 }}
            >

                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="revenue" fill="#8884d8"/>
            </BarChart>
        </div>

    );
};

export default BarChartComponent;
