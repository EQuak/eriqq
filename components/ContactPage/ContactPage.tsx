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
            <Text weight={'bold'} decoration={'uppercase'} size="xxlarge">
              Get in touch
            </Text>
          </Form.Label>
          <Form.Row>
            <Text weight={'bold'} decoration={'uppercase'} size="xlarge">
              Email
            </Text>
            <a href="mailto: eriq.quatkemeyer@hotmail.com">
              <Text decoration={'uppercase'} size="xlarge">
                eriq.quatkemeyer@hotmail.com
              </Text>
            </a>
          </Form.Row>
          <Form.Row>
            <Text weight={'bold'} decoration={'uppercase'} size="xlarge">
              Phone
            </Text>
            <a href="tel:+4802842072">
              <Text decoration={'uppercase'} size="xlarge">
                (480)-284-2072
              </Text>
            </a>
          </Form.Row>
          <Form.Row>
            <Text weight={'bold'} decoration={'uppercase'} size="xlarge">
              Location
            </Text>
            <a href="mailto: eriq.quatkemeyer@hotmail.com">
              <Text decoration={'uppercase'} size="xlarge">
                San Tan Valley, Arizona 85143
              </Text>
            </a>
          </Form.Row>
        </InformationWrap>
        <FormWrap onSubmit={handleSubmit(onSubmit)} method="POST">
          <Form.Label>
            <Text weight={'bold'} decoration={'uppercase'} size="xxlarge">
              Send me a message
            </Text>
          </Form.Label>
          <Form.InputWithLabelWrap error={Boolean(errors.firstName)}>
            <Text weight={'bold'} size="xlarge">
              First Name*
            </Text>
            <Form.InputV2 {...register('firstName', { required: true })} />
            <Form.Error>
              {errors.firstName && <>first name is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.lastName)}>
            <Text weight={'bold'} size="xlarge">
              Last Name*
            </Text>
            <Form.InputV2 {...register('lastName', { required: true })} />
            <Form.Error>
              {errors.lastName && <>last name is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.email)}>
            <Text weight={'bold'} size="xlarge">
              Email*
            </Text>
            <Form.InputV2 {...register('email', { required: true })} />
            <Form.Error>{errors.email && <>email is required.</>}</Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.phone)}>
            <Text weight={'bold'} size="xlarge">
              Phone*
            </Text>
            <Form.InputV2 {...register('phone', { required: true })} />
            <Form.Error>{errors.phone && <>phone is required.</>} </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap error={Boolean(errors.company)}>
            <Text weight={'bold'} size="xlarge">
              Company*
            </Text>
            <Form.InputV2 {...register('company', { required: true })} />
            <Form.Error>
              {errors.company && <>company is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap>
            <Text weight={'bold'} size="xlarge">
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

  padding: '0rem 1.5rem 5rem 1.5rem',

  '@tablet': {
    gap: '6rem',

    flexDirection: 'row',
    padding: '0rem 2rem 5rem 2rem',
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
