import {Box, Container, Footer, Image} from '@chakra-ui/react';

function FooterContent() {
  const details = {
    imageUrl: '#',
    imageAlt: 'Little Lemon footer image',
  }

    return (
        <Footer>
          <Container>
          <Box maxW='sm' borderw='1px' borderRadius='lg' overflow='hidden'>
          <Image src={details.imageUrl} alt={details.imageAlt} />
          </Box>

          <Box>
            <ul>
              <li><h3>Doormat <br/>Navigation</h3></li>
              <br/>
              <li><button href="./public/index.html">Home</button></li>
              <li><button href="#">About</button></li>
              <li><button href="#">Menu</button></li>
              <li><button href="#">Reservations</button></li>
              <li><button href="#">Order Online</button></li>
              <li><button href="#">Login</button></li>
            </ul>
          </Box>
          
          <Box>
            <ul>
              <li><h3>Contact</h3></li>
              <br/>
              <li><button href="#">Adress</button></li>
              <li><button href="#">Phone Number</button></li>
              <li><button href="#">Email</button></li>
            </ul>
          </Box>

          </Container>
        </Footer>    
    );
}

export default FooterContent;
