import Text from '../Text';
import { styled } from '../../stitches.config';
import Title from '../Title';
import * as Page from '../Page';

export function PrivacyPage() {
  return (
    <Page.Page title="Privacy">
      <Content>
        <Title title="Privacy" />
        <Page.Section>
          <Text weight={'semiBold'}>
            What and when personal information do we collect from the people
            that visit our blog, website or app?
          </Text>
          <Text weight={'normal'}>
            When registering on our site, as appropriate, you may be asked to
            enter your name, email ID, mailing address, phone number or other
            details to provide you better services.
          </Text>
        </Page.Section>
        <Page.Section>
          <Text weight={'semiBold'}>How do we use your information?</Text>
          <Text weight={'normal'}>
            We may use the information we collect from you when you signup or
            make a purchase, subscribe to our newsletter, respond to a survey,
            try out the website, or use specific other features of the website
            in the following ways: To enhance your experience and to allow us to
            deliver the type of content and product contributions in which you
            are concerned the most. To allow us to impart better service for you
            in responding to your customer service requests. To summarize with
            the users after communication on live chat, email or phone
            inquiries. ‍
          </Text>
        </Page.Section>
        <Page.Section>
          <Text weight={'semiBold'}>How do we protect your information?</Text>
          <Text weight={'normal'}>
            We do not use liability scanning as per PCI standards.
          </Text>
          <Text weight={'normal'}>
            We only provide articles and information.
          </Text>
          <Text weight={'normal'}>We do not use tracking tools.</Text>
          <Text weight={'normal'}>
            Your personal information is stored on secured networks which are
            only manageable by a limited number of people having special access
            rights to such systems. It is essential to keep the information
            confidential for them. Also, the sensitive information gathered is
            encrypted via Secure Socket Layer (SSL) technique. High security
            actions are implemented to maintain the safety of your personal
            information when you enter, submit or access it. The credit card and
            transaction related information are not processed or stored on our
            servers.
          </Text>
        </Page.Section>
        <Page.Section>
          <Text weight={'semiBold'}>We use cookies to:</Text>
          <Text weight={'normal'}>
            To understand user's preferences for their future visits.
          </Text>
          <Text weight={'normal'}>
            Accumulate collective data about site traffic and site interactions
            in order to offer better site experiences in the future. We might
            use some trusted third-party services that track this information on
            our behalf. You can set warnings on your computer to warn you each
            time a cookie is being sent, or you can choose to turn off all
            cookies completely from your browser settings.
          </Text>
          <Text weight={'bold'}>
            If users disable cookies in their browser: Some features of the site
            may not work properly which are responsible for better user
            experience. Features efficient for improved site experience might
            fail to work properly.
          </Text>
        </Page.Section>
        <Page.Section>
          <Text weight={'bold'}>Third-party disclosure:</Text>
          <Text weight={'normal'}>
            We do not promote, exchange, or move your Personally Identifiable
            Information to other parties unless you provide us permission. The
            hosting partners and other parties who contribute in operating our
            website, conducting our business, or serving our users are not
            included in this until they keep the information safe and secure. We
            may share the information when it comes to obey the law rules and
            regulation while protecting our and others rights in case of
            violation of security. ‍
          </Text>
        </Page.Section>
        <Page.Section>
          <Text weight={'bold'}>Third-party links:</Text>
          <Text weight={'normal'}>
            Rarely, at our prudence, we may comprise or offer third-party
            products or services on our website. All these sites have their own
            separate privacy policies. Hence we are not responsible or liable
            for its content and terms of use for those links. To protect the
            reliability of our site we always welcome any opinion about those
            sites.
          </Text>
        </Page.Section>
      </Content>
    </Page.Page>
  );
}

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0rem 1.875rem',
  paddingBottom: '5rem',
  gap: '1.5rem',
});
