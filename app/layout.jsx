import "@styles/globals.css";

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from "@components/Footer";

export const metadata = {
  title: "TalentoSearch",
  description: "Поиск работы для подростков и студентов",
};

const RootLayout = ({ children }) => (
  <html lang='ru'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}

          <Footer />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
