import { LinkedInIcon, MountainsIcon, GithubIcon } from '../icons';
import { styled } from '../stitches.config';
import { ContentContainer } from './ContentContainer';
import { Text } from './Text';

export function AppFooter() {
  return (
    <FooterWrap>
      <ContentContainer>
        <LinksWrap>
          <Text size={'body'}>
            <span>Made by Eriq Quatkemeyer</span>
          </Text>
          <div className={'links'}>
            <a
              className="github"
              target="_blank"
              href="https://github.com/EQuak"
            >
              <GithubIcon />
            </a>
            <a
              className="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/eriq-quatkemeyer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </LinksWrap>
      </ContentContainer>
      <div className="mountains">
        <MountainsIcon />
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled('footer', {
  display: 'block',
  position: 'relative',

  '.mountains': {
    svg: {
      position: 'absolute',
    },
  },
  '@tablet': {},
  '@desktop': {},
});

const LinksWrap = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignContent: 'center',
  padding: '1rem 0rem',

  '.links': {
    display: 'flex',
    gap: '1rem',
  },
});

export default AppFooter;
