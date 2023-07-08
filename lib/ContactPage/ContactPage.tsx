import { useForm } from 'react-hook-form';
import axios from 'axios';

import {
  Text,
  Button,
  Page,
  ContentContainer,
  Section,
} from '../../components';
import * as Form from '../../components/Form';

import { colors, styled } from '../../stitches.config';

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
      <Section style={'header'} backgroundColor={colors.lightBlue}>
        <Content>
          <ContentContainer css={{ margin: 0, flex: 0.5 }}>
            <Form.Label>
              <Text weight={'bold'} size={'h2'}>
                Get in touch
              </Text>
            </Form.Label>
            <Form.Row>
              <Text weight={'bold'} decoration={'uppercase'} size={'body'}>
                Email
              </Text>
              <a target="_blank" href="mailto: eriq.quatkemeyer@hotmail.com">
                <Text decoration={'uppercase'} size={'body'}>
                  eriq.quatkemeyer@hotmail.com
                </Text>
              </a>
            </Form.Row>
            <Form.Row>
              <Text weight={'bold'} decoration={'uppercase'} size={'body'}>
                Phone
              </Text>
              <a href="tel:+4802842072">
                <Text decoration={'uppercase'} size={'body'}>
                  (480)-284-2072
                </Text>
              </a>
            </Form.Row>
            <Form.Row>
              <Text weight={'bold'} decoration={'uppercase'} size={'body'}>
                Location
              </Text>
              <address>
                <Text decoration={'uppercase'} size={'body'}>
                  San Tan Valley, Arizona 85143
                </Text>
              </address>
            </Form.Row>
          </ContentContainer>
          <ContentContainer css={{ margin: 0, flex: 1.5 }}>
            <FormWrap onSubmit={handleSubmit(onSubmit)} method="POST">
              <Form.Label>
                <Text weight={'bold'} size={'h2'}>
                  Send me a message
                </Text>
              </Form.Label>
              <Form.InputWithLabelWrap>
                <Text className="label" weight={'bold'} size={'body'}>
                  <span>First Name</span>
                  <span className="required">*</span>
                </Text>
                <Form.InputV2 {...register('firstName', { required: true })} />
                <Form.Error>
                  {errors.firstName && <>First Name is required.</>}
                </Form.Error>
              </Form.InputWithLabelWrap>
              <Form.InputWithLabelWrap>
                <Text className="label" weight={'bold'} size={'body'}>
                  <span>Last Name</span>
                  <span className="required">*</span>
                </Text>
                <Form.InputV2 {...register('lastName', { required: true })} />
                <Form.Error>
                  {errors.lastName && <>Last Name is required.</>}
                </Form.Error>
              </Form.InputWithLabelWrap>
              <Form.InputWithLabelWrap>
                <Text className="label" weight={'bold'} size={'body'}>
                  <span>Email</span>
                  <span className="required">*</span>
                </Text>
                <Form.InputV2 {...register('email', { required: true })} />
                <Form.Error>
                  {errors.email && <>Email is required.</>}
                </Form.Error>
              </Form.InputWithLabelWrap>
              <Form.InputWithLabelWrap>
                <Text className="label" weight={'bold'} size={'body'}>
                  <span>Phone</span>
                  <span className="required">*</span>
                </Text>
                <Form.InputV2 {...register('phone', { required: true })} />
                <Form.Error>
                  {errors.phone && <>Phone is required.</>}{' '}
                </Form.Error>
              </Form.InputWithLabelWrap>
              <Form.InputWithLabelWrap>
                <Text className="label" weight={'bold'} size={'body'}>
                  <span>Company</span>
                  <span className="required">*</span>
                </Text>
                <Form.InputV2 {...register('company', { required: true })} />
                <Form.Error>
                  {errors.company && <>Company is required.</>}
                </Form.Error>
              </Form.InputWithLabelWrap>
              <Form.InputWithLabelWrap>
                <Text className="label" weight={'bold'} size={'body'}>
                  <span>Message</span>
                  <span className="required">*</span>
                </Text>
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
          </ContentContainer>
        </Content>
      </Section>
    </Page>
  );
}

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  justifyContent: 'space-between',
  gap: '2rem',

  // padding: '0rem 1rem 5rem 1rem',

  '@tablet': {
    gap: '4rem',
    // padding: '0rem 2rem',
  },
  '@desktop': {
    flexDirection: 'row',
  },

  '@largeDesktop': {
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
