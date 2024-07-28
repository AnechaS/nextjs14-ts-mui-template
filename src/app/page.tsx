import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Lorem from '@/components/lorem';

export default function Home() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" className="p-1" sx={{ mb: 4 }}>
        Material UI - Next.js App Router example in TypeScript
      </Typography>

      <Lorem />
    </Container>
  );
}
