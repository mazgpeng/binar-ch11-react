import { Text, Container, Row, Button, Spacer, Card, Col } from "@nextui-org/react";
import { Box } from "./nextui/Box"
import background from '../img/background.jpeg'

export default function ContentHome() {
  return (
    <>
      <Container xl css={{
        backgroundImage: `url(${background})`,
        fontSize: '50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
      }}>
        <Row>
          <Box css={{ px: "$12", mt: "$20", mb: "$10", pl: "$15", "@xsMax": { px: "$10" } }}>
            <Text h1 css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}> Massive Choice of Games !</Text>
            <Text size={40} > Introducing GameStation</Text>
            <Text size={30} > One Stop Platform to Cloud Gaming.</Text>
            <Spacer y={0.5} />
            <Button css={{ mb: "$10" }} shadow bordered color="gradient" auto>
              Play Now!
            </Button>
          </Box>
        </Row>
      </Container>

      <Container xl css={{
        backgroundColor: "white",
      }}>
        <Box css={{ px: "$12", mt: "$10", mb: "$10", mr: "$10", "@xsMax": { px: "$10" } }}>
          <Row gap={2} >
            <Col span={12} >
              <Card css={{ $$cardColor: '$colors$secondary' }}>
                <Card.Body>
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Purus gravida quis blandit turpis. Augue neque gravida in
                    fermentum et sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus
                    egestas sed sed risus pretium quam vulputate. Interdum velit euismod in pellentesque massa
                    placerat duis ultricies.
                  </Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card css={{ $$cardColor: '$colors$primary' }}>
                <Card.Body>
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    2 of 3
                  </Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card css={{ $$cardColor: '$colors$primary' }}>
                <Card.Body>
                  <Text h6 size={15} color="white" css={{ m: 0 }}>
                    3 of 3
                  </Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Box>

      </Container>

      <Container xl css={{
        backgroundColor: "gray",
      }}>
        <Row>
          <Box css={{ px: "$12", mt: "$20", "@xsMax": { px: "$10" } }}>
            <Text h1 css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}> Massive Choice of Games !</Text>
            <Text size={40} > Introducing GameStation</Text>
            <Text size={30} > One Stop Platform to Cloud Gaming.</Text>
            <Spacer y={0.5} />
            <Button css={{ mb: "$10" }} shadow bordered color="gradient" auto>
              Play Now!
            </Button>
          </Box>
        </Row>
      </Container>

    </>

  )
};
