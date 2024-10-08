import { Container } from '@components/Container';
import { GithubIcon } from '@components/icons/github';
import { Logo } from '@components/icons/logo';
import { SlackIcon } from '@components/icons/slack';
import { TwitterIcon } from '@components/icons/twitter';

import { FooterLink } from './FooterLink';
import { Center } from './Center';

export const Footer = () => {
  return (
    <Center>
      <footer className="mt-12 border-t border-gray-100 py-[5.6rem] text-md">
        <Container className="flex flex-col justify-between lg:flex-row">
          <div>
            <div className="flex h-full flex-row justify-between lg:flex-col">
              <div className="mt-auto flex space-x-4 text-gray-400">
                <a
                  href="mailto: founders@projectftk.com"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
                <span>{'© Frosti. All rights reserved.'}</span>
              </div>
            </div>
          </div>
          <div >
          </div>
        </Container>
      </footer>
    </Center>
  );
};
