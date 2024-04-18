import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <Container>
            <p className="text-dark text-center fs-2 mt-5">
                Esta página no existe
                <Link to="/desafio2-naturalpic/" className='fw-bold p-3'>
                    <Button variant="secondary">Volver a inicio</Button>
                </Link>
            </p>
        </Container>
    );
}
