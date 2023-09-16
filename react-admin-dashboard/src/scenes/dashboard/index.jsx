import {Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import {mockTransactions} from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import BarChartComponent from "../../components/BarChartComponent"
import LineChartComponent from "../../components/LineChartComponent"
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const YourComponent = ({setTotalRegistrations, setTotalEvents, setTotalRevenue}) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch total registrations
                const registrationsResponse = await axios.get("/total-registrations");
                setTotalRegistrations(registrationsResponse.data.totalRegistrations);

                // Fetch total events
                const eventsResponse = await axios.get("/total-events");
                setTotalEvents(eventsResponse.data.totalEvents);

                const revenueResponse = await axios.get("/total-revenue");
                setTotalEvents(revenueResponse.data.revenueEvents);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [setTotalRegistrations, setTotalEvents]);

    return null;
};

const Dashboard = () => {
    const [totalRegistrations, setTotalRegistrations] = useState(0);
    const [totalEvents, setTotalEvents] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>

                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{mr: "10px"}}/>
                        Download Reports
                    </Button>
                </Box>
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <YourComponent
                    endpoint="/total-events"
                    setTitle={setTotalEvents}
                />
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={totalEvents.toString()}
                        subtitle="Total Events"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{color: colors.greenAccent[600], fontSize: "26px"}}
                            />
                        }
                    />
                </Box>

                <YourComponent
                    endpoint="/total-registrations"
                    setTitle={setTotalRegistrations}
                />
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* return ( */}
                    <div>
                        {/*{title && (*/}
                        <StatBox
                            title={totalRegistrations.toString()}
                            subtitle="Total Registrations"
                            progress="0.50"
                            increase="+21%"
                            icon={<PointOfSaleIcon sx={{color: colors.greenAccent[600], fontSize: "26px"}}/>}
                        />
                    </div>
                </Box>
                {/*)}*/}
                {/* ); */}
                {/* }; */}

                {/* <StatBox
            title={title}
            subtitle="Total Registrations"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          /> */}

                <YourComponent
                    endpoint="/total-revenue"
                    setTitle={setTotalRevenue}
                />

                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title={totalRevenue.toString()}
                        subtitle="Total Revenue"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{color: colors.greenAccent[600], fontSize: "26px"}}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="1,325,134"
                        subtitle="Traffic Received"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{color: colors.greenAccent[600], fontSize: "26px"}}
                            />
                        }
                    />
                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                Rs 59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{fontSize: "26px", color: colors.greenAccent[500]}}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        {/* <LineChart isDashboard={true} /> */}
                        <LineChartComponent/>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        colors={colors.grey[100]}
                        p="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box
                                backgroundColor={colors.greenAccent[500]}
                                p="5px 10px"
                                borderRadius="4px"
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    p="30px"
                >
                    <Typography variant="h5" fontWeight="600">
                        Sponsorship Money
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125"/>
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{mt: "15px"}}
                        >
                            Rs 48,352 revenue generated
                        </Typography>
                        {/* <Typography>Includes extra misc expenditures and costs</Typography> */}
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{padding: "30px 30px 0 30px"}}
                    >
                        Event vs Registrations
                    </Typography>
                    <Box height="250px" mt="-20px">
                        {/* <BarChart isDashboard={true} /> */}
                        <BarChartComponent/>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px"
                    overflow="auto"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{marginBottom: "15px"}}
                    >
                        Sponsor Information
                    </Typography>
                    <Box height="200px">
                        {/* <GeographyChart isDashboard={true} /> */}
                        {/* </Box> */}
                        {mockTransactions.map((transaction, i) => (
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom={`4px solid ${colors.primary[500]}`}
                                p="15px"
                            >
                                <Box>
                                    <Typography
                                        color={colors.greenAccent[500]}
                                        variant="h5"
                                        fontWeight="600"
                                    >
                                        {transaction.txId}
                                    </Typography>
                                    <Typography color={colors.grey[100]}>
                                        {transaction.user}
                                    </Typography>
                                </Box>
                                <Box color={colors.grey[100]}>{transaction.date}</Box>
                                <Box
                                    backgroundColor={colors.greenAccent[500]}
                                    p="5px 10px"
                                    borderRadius="4px"
                                >
                                    ${transaction.cost}
                                </Box>
                            </Box>
                        ))}
                    </Box>


                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
