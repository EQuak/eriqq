import { useForm } from 'react-hook-form';
import axios from 'axios';

import Page from '../Page';
import Button from '../Button';
import Text from '../Text';
import * as Form from '../Form';

import { styled } from '../../stitches.config';

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
        Company: data.company,
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
        <InformationWrap>
          <Form.Label>
            <Text weight={'bold'} decoration={'uppercase'} size="large">
              Get in touch
            </Text>
          </Form.Label>
          <Form.Row>
            <Text weight={'bold'} decoration={'uppercase'} size="body">
              Email
            </Text>
            <a target="_blank" href="mailto: eriq.quatkemeyer@hotmail.com">
              <Text decoration={'uppercase'} size="body">
                eriq.quatkemeyer@hotmail.com
              </Text>
            </a>
          </Form.Row>
          <Form.Row>
            <Text weight={'bold'} decoration={'uppercase'} size="body">
              Phone
            </Text>
            <a href="tel:+4802842072">
              <Text decoration={'uppercase'} size="body">
                (480)-284-2072
              </Text>
            </a>
          </Form.Row>
          <Form.Row>
            <Text weight={'bold'} decoration={'uppercase'} size="body">
              Location
            </Text>
            <address>
              <Text decoration={'uppercase'} size="body">
                San Tan Valley, Arizona 85143
              </Text>
            </address>
          </Form.Row>
        </InformationWrap>
        <FormWrap onSubmit={handleSubmit(onSubmit)} method="POST">
          <Form.Label>
            <Text weight={'bold'} decoration={'uppercase'} size="large">
              Send me a message
            </Text>
          </Form.Label>
          <Form.InputWithLabelWrap error={Boolean(errors.firstName)}>
            <Text weight={'bold'} size="body">
              First Name*
            </Text>
            <Form.InputV2 {...register('firstName', { required: true })} />
            <Form.Error>
              {errors.firstName && <>first name is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.lastName)}>
            <Text weight={'bold'} size="body">
              Last Name*
            </Text>
            <Form.InputV2 {...register('lastName', { required: true })} />
            <Form.Error>
              {errors.lastName && <>last name is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.email)}>
            <Text weight={'bold'} size="body">
              Email*
            </Text>
            <Form.InputV2 {...register('email', { required: true })} />
            <Form.Error>{errors.email && <>email is required.</>}</Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.phone)}>
            <Text weight={'bold'} size="body">
              Phone*
            </Text>
            <Form.InputV2 {...register('phone', { required: true })} />
            <Form.Error>{errors.phone && <>phone is required.</>} </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.company)}>
            <Text weight={'bold'} size="body">
              Company*
            </Text>
            <Form.InputV2 {...register('company', { required: true })} />
            <Form.Error>
              {errors.company && <>company is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap>
            <Text weight={'bold'} size="body">
              Message
            </Text>
            <Form.InputV2 {...register('message')} />
          </Form.InputWithLabelWrap>
          <ButtonWrap>
            <Button size={'large'} type="submit" theme={'main'}>
              Submit
            </Button>
          </ButtonWrap>
        </FormWrap>
      </Content>
    </Page>
  );
}

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-between',
  gap: '2rem',

  padding: '0rem 1rem 5rem 1rem',

  '@tablet': {
    gap: '4rem',

    padding: '0rem 2rem',
  },
  '@desktop': {
    flexDirection: 'row',

    gap: '6rem',
  },
});

const InformationWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const FormWrap = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const ButtonWrap = styled('div', {
  paddingTop: '1rem',
});
