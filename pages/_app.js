import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import ProviderGlobal from '../contexts';

Router.events.on('routeChangeStart', (url) => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
   static async getInitialProps({ Component, router, ctx }) {
      let pageProps = {}
      if (Component.getInitialProps) {
         pageProps = await Component.getInitialProps(ctx)
      }
      return { pageProps }
   }

   render () {
      const { Component, pageProps } = this.props
      return (
         <ProviderGlobal>
            <Component {...pageProps} />
         </ProviderGlobal>
      )
   }
}
