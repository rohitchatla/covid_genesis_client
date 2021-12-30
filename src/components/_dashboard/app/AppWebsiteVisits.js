import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Sarima(Multi)',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22]
  },
  {
    name: 'Sarima(Uni)',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43]
  },
  {
    name: 'Sarima(Multi-Sscore)',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35]
  }
];

export default function AppWebsiteVisits() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: [0, 2, 3] },
    plotOptions: { bar: { columnWidth: '18%', borderRadius: 4 } },
    fill: { type: ['solid', 'gradient', 'solid'] },
    labels: ['01/01/2021', '02/01/2021', '03/01/2021', '04/01/2021', '05/01/2021', '06/01/2021'],
    xaxis: { type: 'datetime' },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} cases`;
          }
          return y;
        }
      }
    }
  });

  return (
    <Card>
      <CardHeader title="Cases vs Dates" subheader="(+0.24%) than yesterday" />
      {/* "Website Visits" */}
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
