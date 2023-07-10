import {
  Container,
  Form,
  Title,
  Content,
  FormControl,
  Label,
  Input,
  Textarea,
  Button,
} from './ContactElements';

const Contact = () => {
  return (
    <Container>
      <Form>
        <Content>
          <FormControl>
            <Title>Contactez-Nous</Title>
            <Label>Name</Label>
            <Input placeholder='Nom' />

            <Label>Email</Label>
            <Input placeholder='Email' />

            <Label>Telephone</Label>
            <Input placeholder='Telephone' type='mobile' />

            <Label>Sujet</Label>
            <Input placeholder='Sujet' />

            <Textarea placeholder='Message...' />
            <Button>Envoyer</Button>
          </FormControl>
        </Content>
      </Form>
    </Container>
  );
};

export default Contact;
