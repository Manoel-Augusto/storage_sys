import Document, { Html, Head, Main, NextScript } from 'next/document';
import { BT } from '../public/static/js/bootstrapcss.min.js';
import { NP } from '../public/static/js/nprogress.min.js';
import { MAIN } from '../public/static/js/main.min.js';
import urlScripts from '../public/static/js/scripts.json';

export default class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps};
   }

   render() {
      return (
         <Html lang="pt-br">
            <Head>
               <style dangerouslySetInnerHTML={{__html:`${MAIN}${NP}${BT}`}}/>
            </Head>
            <body>
               <Main />
               <NextScript />
               {urlScripts.map((item,index) => <script key={index} src={item}></script>)}
            </body>
         </Html>
      );
   }
}
