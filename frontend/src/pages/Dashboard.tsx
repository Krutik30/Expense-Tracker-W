import { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { Button, Grid } from "@mui/material";
import { Role } from "../config";

const options = {
    series: [
        {
            name: "Inflation",
            data: [2.3, 3.1, 4.0, 1.1, 4.0, 3.6, 5.2, 6.3, 7.4, 8.8, 7.5, 10.2],
        },
    ],
    chart: {
        height: 500,
        type: "bar",
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: "top", // top, center, bottom
            },
        },
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: any) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: "12px",
            colors: ["#304758"],
        },
    },

    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        position: "top",
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        crosshairs: {
            fill: {
                type: "gradient",
                gradient: {
                    colorFrom: "#D8E3F0",
                    colorTo: "#BED1E6",
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                },
            },
        },
        tooltip: {
            enabled: true,
        },
    },
    yaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val: any) {
                return val + "%";
            },
        },
    },
    title: {
        text: "Monthly Employee Expense",
        floating: true,
        align: "center",
        style: {
            color: "#444",
        },
    },
};

var options2 = {
    series: [
        {
            name: "Expense",
            group: "1",
            data: [44000, 55000, 41000, 67000, 22000, 43000],
        },
        {
            name: "Salary",
            group: "2",
            data: [48000, 50000, 40000, 65000, 25000, 40000],
        },
        {
            name: "Allowance",
            group: "1",
            data: [13000, 36000, 20000, 8000, 13000, 27000],
        },
        {
            name: "Advance",
            group: "2",
            data: [20000, 40000, 25000, 10000, 12000, 28000],
        },
    ],
    chart: {
        type: "bar",
        height: 500,
        stacked: true,
    },
    stroke: {
        width: 1,
        colors: ["#fff"],
    },
    dataLabels: {
        formatter: (val: any) => {
            return val / 1000 + "K";
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    xaxis: {
        categories: ["Neha", "Krutik", "Yash", "Dharmen", "Sandip", "Harsh"],
    },
    fill: {
        opacity: 1,
    },
    colors: ["#80c7fd", "#008FFB", "#80f1cb", "#00E396"],
    yaxis: {
        labels: {
            formatter: (val: any) => {
                return val / 1000 + "K";
            },
        },
    },
    legend: {
        position: "top",
        horizontalAlign: "left",
    },
};

var options3 = {
    series: JSON.parse(localStorage.getItem("expenses") || "[]").map(
        (e: any) => e._sum?.Amount
    ),
    chart: {
        width: 500,
        type: "pie",
    },
    labels: JSON.parse(localStorage.getItem("expenses") || "[]").map(
        (e: any) => e?.Category
    ),
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 200,
                },
                legend: {
                    position: "bottom",
                },
            },
        },
    ],
};

const salaryDataMonthly = [1000, 1200, 1100, 1300, 1250, 1350, 1400];
const expensesDataMonthly = [400, 350, 500, 450, 420, 480, 520];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const salaryDataWeekly = [200, 250, 300, 280, 270, 310, 330];
const expensesDataWeekly = [100, 120, 150, 130, 140, 160, 170];
const weeks = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
];


export function Dashboard() {
    const [chartType, setChartType] = useState("monthly");
    const role = JSON.parse(localStorage.getItem('user') || "{}").role

    useEffect(() => {
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
        chart2.render();

        const chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
        chart3.render();

        return () => {
            chart.destroy();
            chart2.destroy();
            chart3.destroy();
        };
    }, []);
    useEffect(() => {
        const options4 = {
            series: [
                {
                    name: "Salary",
                    data: chartType === "monthly" ? salaryDataMonthly : salaryDataWeekly,
                },
                {
                    name: "Expenses",
                    data:
                        chartType === "monthly" ? expensesDataMonthly : expensesDataWeekly,
                },
            ],
            chart: {
                height: 500,
                type: "area",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "category",
                categories: chartType === "monthly" ? months : weeks,
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
        };

        const chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
        chart4.render();
        return () => {
            chart4.destroy();
        };
    }, [chartType]);
    const handleChartTypeChange = () => {
        setChartType(chartType === "monthly" ? "weekly" : "monthly");
    };
    return (
        <div
            className="bg-aqua_et flex-col"
            style={{ width: "100%", height: "100%" }}
        >
            <Grid container>
                <Grid item xs={role === Role.admin ? 8 : 12}>
                    <div id="chart"></div>
                </Grid>
                {role === Role.admin ? <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div id="chart3"></div>
                </Grid> : <></>}
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <div id="chart2"></div>
                </Grid>
                <Grid item xs={6}>
                    <Button sx={{ 
                        position: 'absolute',
                        zIndex: 20,
                        marginLeft: 10
                     }} onClick={handleChartTypeChange}>
                        {chartType === "monthly" ? "Weekly" : "Monthly"}
                    </Button>
                    <div id="chart4"></div>
                </Grid>
            </Grid>
        </div>
    );
}
