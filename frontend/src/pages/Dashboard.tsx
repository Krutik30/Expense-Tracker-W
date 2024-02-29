import { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const options = {
    series: [{
        name: 'Inflation',
        data: [2.3, 3.1, 4.0, 1.1, 4.0, 3.6, 5.2, 6.3, 7.4, 8.8, 7.5, 10.2]
    }],
    chart: {
        height: 500,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val: any) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '12px',
            colors: ["#304758"]
        }
    },

    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
        }
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val: any) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'Monthly Employee Expense',
        floating: true,
        align: 'center',
        style: {
            color: '#444'
        }
    }
};



var options2 = {
    series: [
        {
            name: 'Expense',
            group: '1',
            data: [44000, 55000, 41000, 67000, 22000, 43000]
        },
        {
            name: 'Salary',
            group: '2',
            data: [48000, 50000, 40000, 65000, 25000, 40000]
        },
        {
            name: 'Allowance',
            group: '1',
            data: [13000, 36000, 20000, 8000, 13000, 27000]
        },
        {
            name: 'Advance',
            group: '2',
            data: [20000, 40000, 25000, 10000, 12000, 28000]
        }
    ],
    chart: {
        type: 'bar',
        height: 500,
        stacked: true,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    dataLabels: {
        formatter: (val: any) => {
            return val / 1000 + 'K'
        }
    },
    plotOptions: {
        bar: {
            horizontal: false
        }
    },
    xaxis: {
        categories: [
            'Neha',
            'Krutik',
            'Yash',
            'Dharmen',
            'Sandip',
            'Harsh'
        ]
    },
    fill: {
        opacity: 1
    },
    colors: ['#80c7fd', '#008FFB', '#80f1cb', '#00E396'],
    yaxis: {
        labels: {
            formatter: (val: any) => {
                return val / 1000 + 'K'
            }
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left'
    }
};



export function Dashboard() {
    useEffect(() => {
        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        const chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
        chart2.render();

        // Cleanup function
        return () => {
            chart.destroy();
            chart2.destroy();
        };
    }, []);

    return (
        <div className='bg-gradient-to-r from-orange-700 via-orange-500 to-orange-400'>

        <div style={{ width: '100%', height: '100%'}}>
            <div id='chart'></div>
            <div id='chart2'></div>
        </div>
        </div>
    );
}
