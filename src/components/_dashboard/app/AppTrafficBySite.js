import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// material
import { Box, Grid, Card, Paper, Typography, CardHeader, CardContent } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

import activityFill from '@iconify/icons-eva/activity-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import barChartOutline from '@iconify/icons-eva/bar-chart-outline';
import eyeOff2Fill from '@iconify/icons-eva/eye-off-2-fill';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Active',
    value: 82402, //faker.datatype.number(),
    icon: <Icon icon={activityFill} color="#1877F2" width={32} height={32} />
  },
  {
    name: 'Discharged',
    value: 34258778, //faker.datatype.number(),
    icon: <Icon icon={barChartOutline} color="#DF3E30" width={32} height={32} />
  },
  {
    name: 'Deaths',
    value: 480860, //faker.datatype.number(),
    icon: <Icon icon={alertTriangleFill} color="#006097" width={32} height={32} />
  },
  {
    name: 'Confirmed',
    value: 7010, //faker.datatype.number(),
    icon: <Icon icon={eyeOff2Fill} color="#1C9CEA" width={32} height={32} />
  }
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object
};

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{fShortenNumber(value)}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function AppTrafficBySite() {
  return (
    <Card>
      <CardHeader title="" />
      {/* "Traffic by Site" */}
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
