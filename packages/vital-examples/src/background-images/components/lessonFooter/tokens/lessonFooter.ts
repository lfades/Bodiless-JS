import { asFooterToken } from '@bodiless/vital-layout';
import {
  as,
  Div,
  on,
} from '@bodiless/fclasses';
import { withChild } from '@bodiless/core';
import LogoIcon from '../../../assets/images/logo';

// NOTE: In truth, all of the styling found within this withTopFooterWave token
// could be applied directly to the customFooter token below, but is separated
// here for readability and modularity's sake.

const WithTopWave = asFooterToken({
  Theme: {
    Column2Wrapper: '2xl:before:content-none before:content-[\'\'] before:bg-mobile-wave-top relative',
  },
  Spacing: {
    Column2Wrapper: 'before:mr-[-50vw] before:right-[50%] before:top-[-35px]'
  },
  Layout: {
    Column2Wrapper: 'before:absolute before:w-screen before:h-9'
  },
});

// const WithLogo = asFooterToken({

// });

const WithLogo = asFooterToken(
  {
    Components: {
      Rewards:
      // NOTE: Here we replace our footer's current 'Rewards' slot with
      // a div, and add our new logo as a child of that div.
      as(
        on(Div)(withChild(LogoIcon)),
        'px-40',
      ),
      // NOTE: This could also be written as: as(replaceWith(Div), withChild(LogoIcon), 'logo'),
    },
    Spacing: {
      Wrapper: 'py-40',
    },
    Theme: {
      // NOTE: Here in 'Theme' domain of our footer token, we apply our footer-wave
      // class to the container (Wrapper) at desktop screen sizes.
      Wrapper: '2xl:footer-wave',
    },
  },
);

export default {
  WithTopWave,
  WithLogo,
};
