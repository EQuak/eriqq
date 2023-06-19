import { useForm } from 'react-hook-form';
import axios from 'axios';

import Page from '../Page';
import Button from '../Button';
import { Text2 } from '../Text';
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
            <Text2 weight={'bold'} size={'h2'}>
              Get in touch
            </Text2>
          </Form.Label>
          <Form.Row>
            <Text2 weight={'bold'} decoration={'uppercase'} size={'body'}>
              Email
            </Text2>
            <a target="_blank" href="mailto: eriq.quatkemeyer@hotmail.com">
              <Text2 decoration={'uppercase'} size={'body'}>
                eriq.quatkemeyer@hotmail.com
              </Text2>
            </a>
          </Form.Row>
          <Form.Row>
            <Text2 weight={'bold'} decoration={'uppercase'} size={'body'}>
              Phone
            </Text2>
            <a href="tel:+4802842072">
              <Text2 decoration={'uppercase'} size={'body'}>
                (480)-284-2072
              </Text2>
            </a>
          </Form.Row>
          <Form.Row>
            <Text2 weight={'bold'} decoration={'uppercase'} size={'body'}>
              Location
            </Text2>
            <address>
              <Text2 decoration={'uppercase'} size={'body'}>
                San Tan Valley, Arizona 85143
              </Text2>
            </address>
          </Form.Row>
        </InformationWrap>
        <FormWrap onSubmit={handleSubmit(onSubmit)} method="POST">
          <Form.Label>
            <Text2 weight={'bold'} size={'h2'}>
              Send me a message
            </Text2>
          </Form.Label>
          <Form.InputWithLabelWrap>
            <Text2 className="label" weight={'bold'} size={'body'}>
              <span>First Name</span>
              <span className="required">*</span>
            </Text2>
            <Form.InputV2 {...register('firstName', { required: true })} />
            <Form.Error>
              {errors.firstName && <>First Name is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap>
            <Text2 className="label" weight={'bold'} size={'body'}>
              <span>Last Name</span>
              <span className="required">*</span>
            </Text2>
            <Form.InputV2 {...register('lastName', { required: true })} />
            <Form.Error>
              {errors.lastName && <>Last Name is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap>
            <Text2 className="label" weight={'bold'} size={'body'}>
              <span>Email</span>
              <span className="required">*</span>
            </Text2>
            <Form.InputV2 {...register('email', { required: true })} />
            <Form.Error>{errors.email && <>Email is required.</>}</Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap>
            <Text2 className="label" weight={'bold'} size={'body'}>
              <span>Phone</span>
              <span className="required">*</span>
            </Text2>
            <Form.InputV2 {...register('phone', { required: true })} />
            <Form.Error>{errors.phone && <>Phone is required.</>} </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap>
            <Text2 className="label" weight={'bold'} size={'body'}>
              <span>Company</span>
              <span className="required">*</span>
            </Text2>
            <Form.InputV2 {...register('company', { required: true })} />
            <Form.Error>
              {errors.company && <>Company is required.</>}
            </Form.Error>
          </Form.InputWithLabelWrap>
          <Form.InputWithLabelWrap>
            <Text2 className="label" weight={'bold'} size={'body'}>
              <span>Message</span>
              <span className="required">*</span>
            </Text2>
            <Form.InputV2 {...register('message', { required: true })} />
            <Form.Error>
              {errors.message && <>Message is required.</>}
            </Form.Error>
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
