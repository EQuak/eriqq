import Page from '../Page';
import Text from '../Text';
import { styled } from '../../stitches.config';
import * as Form from '../Form';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { ImageTitle } from '../Title';
import backgroundImage from '../../public/pexels-andrea-piacquadio-845451.jpg';
import axios from 'axios';
export function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = async (data: any) => {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios
      .post('https://formsubmit.co/ajax/eriq.quatkemeyer@hotmail.com', {
        FirstName: data.firstName,
        LastName: data.lastName,
        Email: data.email,
        Phone: data.phone,
        Message: data.message,
      })
      .then((response) => {
        console.log(response);
        reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Page title="Contact">
      <Content>
        <ImageTitle
          title="Contact us"
          backgroundSource={backgroundImage}
          alt="pexels-andrea-piacquadio-845451"
        />
        <Layout>
          <InformationWrap>
            <Text weight={'bold'} type="subLabel" size="xxlarge">
              Get in touch
            </Text>
            <Form.Row>
              <Text weight={'bold'} type="subLabel" size="xlarge">
                Melmac Logistics, LLC
              </Text>
            </Form.Row>
            <Form.Row>
              <Text weight={'bold'} type="subLabel" size="xlarge">
                Email
              </Text>
              <a href="mailto: logistics@melmaclogistics.com">
                <Text type="subLabel" size="xlarge">
                  logistics@melmaclogistics.com
                </Text>
              </a>
            </Form.Row>
          </InformationWrap>
          <FormWrap onSubmit={handleSubmit(onSubmit)} method="POST">
            <Form.Label>
              <Text weight={'bold'} type="subLabel" size="xxlarge">
                Send us a message
              </Text>
            </Form.Label>
            <Form.InputWithLabelWrap error={Boolean(errors.firstName)}>
              <Text size="large">First Name*</Text>
              <Form.InputV2 {...register('firstName', { required: true })} />
              <Form.Error>
                {errors.firstName && <p>first name is required.</p>}
              </Form.Error>
            </Form.InputWithLabelWrap>
            <Form.InputWithLabelWrap error={Boolean(errors.lastName)}>
              <Text size="large">Last Name*</Text>
              <Form.InputV2 {...register('lastName', { required: true })} />
              <Form.Error>
                {errors.lastName && <p>last name is required.</p>}
              </Form.Error>
            </Form.InputWithLabelWrap>
            <Form.InputWithLabelWrap error={Boolean(errors.email)}>
              <Text size="large">Email*</Text>
              <Form.InputV2 {...register('email', { required: true })} />
              <Form.Error>
                {errors.email && <p>email is required.</p>}
              </Form.Error>
            </Form.InputWithLabelWrap>
            <Form.InputWithLabelWrap error={Boolean(errors.phone)}>
              <Text size="large">Phone*</Text>
              <Form.InputV2 {...register('phone', { required: true })} />
              <Form.Error>
                {errors.phone && <p>phone is required.</p>}{' '}
              </Form.Error>
            </Form.InputWithLabelWrap>
            <Form.InputWithLabelWrap>
              <Text size="large">Message</Text>
              <Form.InputV2 {...register('message')} />
            </Form.InputWithLabelWrap>
            <ButtonWrap>
              <Button size={'large'} type="submit" theme={'main'}>
                Submit
              </Button>
            </ButtonWrap>
          </FormWrap>
        </Layout>
      </Content>
    </Page>
  );
}

const Content = styled('div', {
  paddingBottom: '5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const FormWrap = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const InformationWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  flex: 1,
});

const Layout = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '2rem',
  margin: '0rem 1rem',

  '@tablet': {
    gap: '1.875rem',
    margin: '0rem 1.875rem',
  },

  '@desktop': {
    gap: '6rem',
    margin: '0rem 3.875rem',
    flexDirection: 'row',
  },
});

const SVGWrap = styled('div', {
  display: 'none',

  '@desktop': {
    display: 'flex',
    paddingTop: '2rem',
    width: '100%',
    justifyContent: 'center',
    svg: {
      height: '195px',
    },
  },
});
const ButtonWrap = styled('div', {
  paddingTop: '1rem',
});
