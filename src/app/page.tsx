import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FormattedMessage } from '@/components/Intl';
import Lorem from '@/components/lorem';

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" className="p-1" sx={{ mb: 4 }}>
        <FormattedMessage id="home.title" />
      </Typography>

      <Lorem />
    </Container>
  );
}
