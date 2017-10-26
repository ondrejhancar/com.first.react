import React from "react";
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import ns from "ns";

const Cfg = {
  APP: ns.namespace,
  CSS: ns.cssPrefix,

  LSILABEL_APP_NAME: "uuAppTemplate",

  LSILABEL_ABOUT: <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="en">About application uuDemoApp</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="cs">O aplikaci uuDemoApp</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>,
};

Cfg.aboutHeader = {
  cs: 'O aplikaci uuDemoApp',
  en: 'About application uuDemoApp'
};

Cfg.aboutCreatorsHeader = {
  cs: 'Tvůrci aplikace',
  en: 'Application creators'
};

Cfg.aboutApp = {
  about: {
    cs: 'Demo aplikace je šablona pro vývoj nových aplikací.',
    en: 'Demo application is a template for developing new applications.'
  },
  licence: {
    organisation: {
      cs: {
        name: 'Unicorn a.s.',
        uri: 'https://www.unicorn.com/'
      },
      en: {
        name: 'Unicorn a.s.',
        uri: 'https://www.unicorn.com/'
      }
    }
  },
  authors: {
    leadingAuthors: [
      {
        name: 'Name Surname',
        role: `<uu5string/>
<UU5.Bricks.Lsi>
<UU5.Bricks.Lsi.Item language="cs">První autor</UU5.Bricks.Lsi.Item>
<UU5.Bricks.Lsi.Item language="en">First author</UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>`
      },
      {
        name: 'Name Surname',
        role: `<uu5string/>
<UU5.Bricks.Lsi>
<UU5.Bricks.Lsi.Item language="cs">Druhý autor</UU5.Bricks.Lsi.Item>
<UU5.Bricks.Lsi.Item language="en">Second author</UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>`
      }
    ],
    otherAuthors: [
      {
        name: 'Name Surname',
        role: `<uu5string/>
<UU5.Bricks.Lsi>
<UU5.Bricks.Lsi.Item language="cs">Třetí autor</UU5.Bricks.Lsi.Item>
<UU5.Bricks.Lsi.Item language="en">Third author</UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>`
      },
      {
        name: 'Name Surname',
        role: `<uu5string/>
<UU5.Bricks.Lsi>
<UU5.Bricks.Lsi.Item language="cs">Čtvrtý autor</UU5.Bricks.Lsi.Item>
<UU5.Bricks.Lsi.Item language="en">Fourth author</UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>`
      }
    ],
  },
  usedTechnologies: {
    technologies: {
      cs: [
        <UU5.Bricks.Link content="UAF" href="http://www.unicorn.com/"/>,
        <UU5.Bricks.Link content="uu5" href="http://www.unicorn.com/"/>,
        <UU5.Bricks.Link content="uuIoT" href="http://www.unicorn.com/"/>,
        <UU5.Bricks.Link content="uuAppServer" href="http://www.unicorn.com/"/>
      ],
      en: []
    },
    content: {
      cs: [
        'Dále byly použity technologie: Html5, CSS, JavaScript, Bootstrap, React, Ruby, Puma a Docker.',
        'Aplikace je provozována v rámci internetové služby Plus4U s využitím cloudu Microsoft Azure.'
      ],
      en: []
    }
  },
};

Cfg.LSILABEL_WELCOME = `<uu5string/>
<UU5.Bricks.Lsi>
  <UU5.Bricks.Lsi.Item language="cs">Vítejte v šabloně pro aplikace uuAppTemplate</UU5.Bricks.Lsi.Item>
  <UU5.Bricks.Lsi.Item language="en">Welcome in application template uuAppTemplate</UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>
`;

Cfg.LSILABEL_WELCOME_SHORT = `<uu5string/>
<UU5.Bricks.Lsi>
  <UU5.Bricks.Lsi.Item language="cs">Vítejte</UU5.Bricks.Lsi.Item>
  <UU5.Bricks.Lsi.Item language="en">Welcome</UU5.Bricks.Lsi.Item>
</UU5.Bricks.Lsi>
`;


Cfg.LSILABEL_INTRO =
  <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="cs">Tato šablona obsahuje připravenou klientskou a serverovou část. Jednotlivé
      komponety, které jsou zde zobrazeny, jsou určeny k tomu, aby demonstrovaly možnosti a způsob použití. Je vhodné je
      upravit, zkopírovat či smazat pro potřeby vyvíjené aplikace.</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="en">This template consist of prepared client and server side. Shown components
      demonstrate possibilities and way of using. For application developing purposes they are suitable for modifying,
      copying and deleting.</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>
;

Cfg.LSILABEL_INTRO_AUTH =
  <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="cs">Tato šablona obsahuje připravenou klientskou a serverovou část. Jednotlivé
      komponety, které jsou zde zobrazeny, jsou určeny k tomu, aby demonstrovaly možnosti a způsob použití. Je vhodné je
      upravit, zkopírovat či smazat pro potřeby vyvíjené aplikace. Více o struktuře uuApp se dozvíte v dokumetaci
      viz&nbsp;
      <UU5.Bricks.Link key="uupplink"
                       href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-25d3b166760a44b7be70e5c2eb2abaaa/book">uuApp
        Developer Guide</UU5.Bricks.Link>.
    </UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="en">This template consist of prepared client and server side. Shown components
      demonstrate possibilities and way of using. For application developing purposes they are suitable for modifying,
      copying and deleting. More about uuApp Structure see documentation&nbsp;
      <UU5.Bricks.Link key="uupplink"
                       href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-25d3b166760a44b7be70e5c2eb2abaaa/book">uuApp
        Developer Guide</UU5.Bricks.Link>.
    </UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>
;

Cfg.LSILABEL_CLIENT =
  <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="cs">Klientská část je implementovaná s využitím komponent z knihoven uu5 a
      plus4u5.</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="en">Libraries uu5 and plus4u5 are used for developing of client
      side.</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>
;

Cfg.LSILABEL_CLIENT_AUTH =
  <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="cs">Klientská část je implementovaná s využitím komponent z knihoven <UU5.Bricks.Link
      key="uupplink" href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-ed11ec379073476db0aa295ad6c00178/book">uu5</UU5.Bricks.Link>
      a <UU5.Bricks.Link key="uupplink"
                         href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-b858ae7d7f8041249f4830277b674990/book">plus4u5</UU5.Bricks.Link>.</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="en">Libraries <UU5.Bricks.Link key="uupplink"
                                                                  href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-ed11ec379073476db0aa295ad6c00178/book">uu5</UU5.Bricks.Link>
      and <UU5.Bricks.Link key="uupplink"
                           href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-b858ae7d7f8041249f4830277b674990/book">plus4u5</UU5.Bricks.Link>
      are used for developing of client side.</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>
;

Cfg.LSILABEL_SERVER =
  <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="cs">Pro spuštení serverové části je potřeba provést inicializaci
      workspace.</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="en">It is necessary to initialize application workspace for running server
      side.</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>
;

Cfg.LSILABEL_SERVER_AUTH =
  <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="cs">Pro spuštení serverové části je potřeba provést inicializaci workspace podle
      návodu viz&nbsp;<UU5.Bricks.Link key="uupplink"
                                       href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-18d2645682d947ba98c048610bb98934/book">uuApp
        Template Developer Guide</UU5.Bricks.Link>.</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="en">It is necessary to initialize application workspace for running server side. See
      manual&nbsp;<UU5.Bricks.Link key="uupplink"
                                   href="https://uuos9.plus4u.net/uu-dockitg01-main/78462435-18d2645682d947ba98c048610bb98934/book">uuApp
        Template Developer Guide</UU5.Bricks.Link>.</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>
;


Cfg.LSILABEL_LOGIN =
  <UU5.Bricks.Lsi>
    <UU5.Bricks.Lsi.Item language="cs">Pro přístup do aplikace se prosím přihlašte...</UU5.Bricks.Lsi.Item>
    <UU5.Bricks.Lsi.Item language="en">Log in to access the application ...</UU5.Bricks.Lsi.Item>
  </UU5.Bricks.Lsi>
;


Cfg.CCRKEY_SPA = Cfg.APP + '.DemoSpaAuthenticated';

export default Cfg;
